#!/usr/local/bin/python3
import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.httpclient
import tornado.websocket
import os
import requests


class BaseHandler(tornado.web.RequestHandler):
	def get(self):
		self.set_header("Content-Type", "application/json")


class IndexHandler(BaseHandler):
	def get(self):
		self.render("templates/html/index.html", message=0, user=self.get_current_user())

class ProjectsHandler(BaseHandler):
    def get(self):
        self.render("templates/html/projects.html")

class ResumeHandler(BaseHandler):
    def get(self):
        self.render("templates/html/resume.html")


def make_app():
	return tornado.web.Application([
		(r"/static/(.*)", tornado.web.StaticFileHandler, {
			"path":os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
		}),
		(r"/",IndexHandler),
        (r"/projects",ProjectsHandler),
        (r"/resume",ResumeHandler)
	], debug=True,compress_response=True)


if __name__ == "__main__":
	app = make_app()
	http_server = tornado.httpserver.HTTPServer(app)
	port = int(os.environ.get("PORT",5000))
	http_server.listen(port)
	print("Running at localhost:5000")
	tornado.ioloop.IOLoop.current().start()
