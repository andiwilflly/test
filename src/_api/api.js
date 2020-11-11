import { createServer } from "miragejs";
// Data
import user from "src/_api/user.json";
import banners from "src/_api/banners.json";
import categories from "src/_api/categories.json";

if(process.env.NODE_ENV === 'development') {
    createServer({
        routes() {
            this.get("/api/user", () => user);
            this.get("/api/banners", () => banners);
            this.get("/api/categories", () => categories);
        }
    })
}
