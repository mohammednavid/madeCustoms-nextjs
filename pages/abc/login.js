// fake login
export default function Login(req, res) {
  const request = req.body;
  const email = request.email;
  const password = request.password;

  if(email === 'johndoe@mail.com' && password === 'ecommerce') {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
}
