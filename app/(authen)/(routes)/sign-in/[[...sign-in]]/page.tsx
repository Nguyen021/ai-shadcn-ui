import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (<div className="flex items-center flex-col justify-center h-screen">
    <SignIn />
  </div>)
}

