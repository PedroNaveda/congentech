import { montserrat } from './ui/fonts';
import './ui/global.css';
import SideNav from './ui/dashboard/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Aquí puedes agregar tus metatags, enlaces a estilos, etc. */}
      </head>
      <body className={`${montserrat.className} antialiased flex flex-col h-screen`}>
        {/* Header */}
        <header className="bg-blue-500 p-4 md:h-16 flex items-center justify-center">
          <h1 className="text-4x1 text-white md:text-2xl md:leading-normal">
            Cogentech
          </h1>
        </header>

        {/* Contenedor principal */}
        <div className="flex flex-grow h-full">
          {/* Navbar a la izquierda */}
          <div className="flex w-64 bg-gray-200 p-4">
            <SideNav />
          </div>

          {/* Contenido a la derecha */}
          <div className="flex-grow md:overflow-y-auto w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}