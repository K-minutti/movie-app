import app from "./app";
const PORT: string | number = 8080; //process.env.PORT

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}.`)
})
