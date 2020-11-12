import { createServer } from "miragejs";
// Data
import user from "src/_api/user.json";
import banners from "src/_api/banners.json";
import topCategories from "src/_api/topCategories.json";
import mainOffers from "src/_api/mainOffers.json";

createServer({
    routes() {
        this.get("/api/user", () => user);
        this.get("/api/banners", () => banners);
        this.get("/api/topCategories", () => topCategories);
        this.get("/api/mainOffers", () => mainOffers);
    }
})
