import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async recentes(req: app.Request, res: app.Response) {
		res.render("index/recentes");
	}
}

export = IndexRoute;
