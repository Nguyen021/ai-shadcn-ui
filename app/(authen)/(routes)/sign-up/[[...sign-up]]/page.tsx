import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
  return (<div className="flex items-center flex-col justify-center h-screen">
    <SignUp />
  </div>)
}
