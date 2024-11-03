import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return <Image src={profileImage} className="w-6 h-6 rounded object-cover" alt='user image'/>;
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
