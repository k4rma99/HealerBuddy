import dashboardIcon from "@/assets/icons/dashboard.svg";
import Image from "next/image";

class ImagePath{
    public static DashboardIcon = <Image src={dashboardIcon} alt = "" width={10} height={10} />;
}

export default ImagePath;