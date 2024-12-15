package like

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type Handler struct {
	Service
}

func NewHandler(s Service) *Handler {
	return &Handler{s}
}

func (h *Handler) CreateLike(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID not found in token"})
		return
	}

	var userIDInt int64
	switch v := userID.(type) {
	case string:
		id, err := strconv.ParseInt(v, 10, 64)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid user ID format"})
			return
		}
		userIDInt = id
	case float64:
		userIDInt = int64(v)
	default:
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unexpected user ID type"})
		return
	}

	postID, err := strconv.ParseInt(c.Param("post_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Post ID"})
		return
	}

	res, err := h.Service.CreateLike(c.Request.Context(), postID, userIDInt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, res)
}

func (h *Handler) GetAllLikes(c *gin.Context) {
	likes, err := h.Service.GetAllLikes(c.Request.Context())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": likes})
}

func (h *Handler) GetAllLikesByUserID(c *gin.Context) {
	userID, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "User ID not found in token"})
		return
	}

	var userIDInt int64
	switch v := userID.(type) {
	case string:
		id, err := strconv.ParseInt(v, 10, 64)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid user ID format"})
			return
		}
		userIDInt = id
	case float64:
		userIDInt = int64(v)
	default:
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unexpected user ID type"})
		return
	}

	likes, err := h.Service.GetAllLikesByUserID(c.Request.Context(), userIDInt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": likes})
}