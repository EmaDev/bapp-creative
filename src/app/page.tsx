import { StarIcon } from "@/assets/icons/Star";
import { SwirlArrowIcon } from "@/assets/icons/SwirlArrow";
import { UnderlinedIcon } from "@/assets/icons/Underlined";
import { CASOS_DE_EXITO } from "@/assets/values/languages/es";
import { Footer } from "@/components/screens/Footer";
import { NavBar } from "@/components/screens/NavBar";
import { TabsLayout } from "@/components/screens/TabsLayout";
import { Contact } from "@/components/screens/home/Contact";
import { Header } from "@/components/screens/home/Header";
import { Services } from "@/components/screens/home/Services";
import { Team } from "@/components/screens/home/Team";
import { Divider } from "@/components/ui/Divider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
      {/*Nuestros principales servicios*/}
      <Services />
      
      <TabsLayout />
      <Divider className="mt-0 mb-12" />

      {/*Casos de exito*/}
      <aside className="w-full flex flex-col items-center font-Poppins bg-primary">
        <h2 className="text-3xl md:text-5xl font-bold">Nuestros casos de <br className="lg:hidden" />
          <span className="text-[#ffc9c9] relative"> exito
            <div className="absolute -right-0 m-auto text-xl">
              <UnderlinedIcon className="w-full" />
            </div>
          </span>
        </h2>

        {CASOS_DE_EXITO.map((item) => (
          <section key={item.titulo} className="flex flex-col lg:grid grid-cols-2 w-4/5 my-8 rounded-lg shadow-lg border">
            <div className="w-full h-full flex items-center">
              <div className="p-8">
                <span className="font-bold text-lg">{item.categoria}</span>
                <h3 className="font-bold text-2xl">{item.titulo}</h3>
                <p className="my-6">I helped Horizons in Perspective develop a new branding
                  and website experience,as well as an engaging product
                  design for their bi-annual journal publication.</p>
                <Link href={"/"} className="flex items-center font-bold text-sm"> View Case Study </Link>

              </div>
            </div>
            <div className="order-first w-full h-full overflow-hidden">
              <Image alt="" height={500} width={1000}
                src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2Fimages%2Fcase_studies%2Fcase-study-01.jpg&w=750&q=75"
                className="w-full h-full object-cover transition ease-in-out delay-150 hover:scale-110"
              />
            </div>
          </section>
        ))}
        <Divider />
      </aside>



      <aside className="min-h-[100vh] relative w-full font-Poppins">
        <div className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
          <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h3 className="text-center text-3xl md:text-5xl font-bold my-6">A technology-first approach</h3>
          <p className="max-w-[600px] text-lg text-center m-auto mb-8">A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>

          <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map(item => (
              <div key={item}
                className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl 
            shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                <div className="space-y-12 text-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/584/584796.png" className="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">First feature</h3>
                    <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                    <a aria-label="read more" href="#" className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </aside>
      <Team/>
      <Contact/>
      <Footer />
    </main>
  )
}
