const testUpload = async(req, res) =>{
  console.log(req.file)
  console.log(req.body)
}

module.exports = testUpload