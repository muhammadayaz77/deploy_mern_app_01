


export let home = (req,res) => {
  return res.status(200).json({data : req.user})
}