class PictureUpload {
  async upload(file) {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "mslfnsrn")
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dbvwm5s4l/upload",
      {
        method: "POST",
        body: data,
      }
    )
    return await result.json()
  }
}
export default PictureUpload
