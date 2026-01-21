import Image from "next/image";

export default function UnderConstruction() {
  return (
    <>

          <div className="relative min-h-screen">
            <div
              className="
                absolute inset-0 
                -z-10
                bg-cover bg-center bg-no-repeat
              "
              style={{
                backgroundImage: "url('/Fondo_WAQB.jpg')",
              }}
            />
                <div className="flex justify-start items-center p-8 md:p-20 h-screen">
                    <Image
                        src="/Logo_JMV.svg"
                        width={117}
                        height={65}
                        alt="Logo"
                    />
                    <p className="pl-10 italic">website under construction</p>
                </div>
            </div>
    </>
)
}