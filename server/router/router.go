package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/milos-web1/blog/controller"
)

func SetupRoutes(app *fiber.App) {

	app.Get("/", controller.BlogList)
	app.Get("/:id", controller.BlogDetail)
	app.Post("/", controller.BlogCreate)
	app.Put("/:id", controller.BlogUpdate)
	app.Delete("/:id", controller.BlogDelete)
}
