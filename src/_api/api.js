import { createServer } from "miragejs";


if(process.env.NODE_ENV === 'development') {
    createServer({
        routes() {
            this.get("/api/users", () => ({
                reminders: [
                    { id: 1, text: "Walk the dog" },
                    { id: 2, text: "Take out the trash" },
                    { id: 3, text: "Work out" },
                ]
            }))
        }
    })
}
