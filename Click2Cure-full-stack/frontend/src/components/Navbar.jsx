import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='cursor-pointer w-44' src={assets.logo} alt="" />
      <nav className="hidden md:flex justify-around items-center gap-4 px-4 py-2 bg-primary rounded-[15px]">

        <NavLink to="/" className={({ isActive }) => `relative group hover:cursor-pointer hover:bg-blue-700 p-2 rounded-full transition-all duration-500 ${isActive ? "bg-blue-700 ring-2 ring-blue-800" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9167 30H20.4167C19.2658 30 18.3333 29.1392 18.3333 28.0769V21.1538C18.3333 20.3038 17.5875 19.6154 16.6667 19.6154H13.3333C12.4125 19.6154 11.6667 20.3038 11.6667 21.1538V28.0769C11.6667 29.1392 10.7342 30 9.58333 30H2.08333C0.9325 30 0 29.1392 0 28.0769V13.3946C0 11.6262 0.878334 9.95539 2.3825 8.86154L14.2258 0.246923C14.68 -0.0823077 15.32 -0.0823077 15.7733 0.246923L27.6183 8.86154C29.1225 9.95539 30 11.6254 30 13.3931V28.0769C30 29.1392 29.0675 30 27.9167 30Z" fill="white"></path>
          </svg>
          <div className="absolute px-2 py-1 mt-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 rounded-md opacity-0 bg-primary top-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
            HOME
          </div>
        </NavLink>

        <NavLink to="/doctors" className={({ isActive }) => `relative group hover:cursor-pointer hover:bg-blue-700 p-2 rounded-full transition-all duration-500 ${isActive ? "bg-blue-700 ring-2 ring-blue-800" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0013 0C10.482 0 6.81914 3.50348 6.81914 7.82609V9.13044C6.81914 13.453 10.482 16.9565 15.0013 16.9565C19.5206 16.9565 23.1835 13.453 23.1835 9.13044V7.82609C23.1835 3.50348 19.5206 0 15.0013 0ZM14.9987 20.8696C9.53569 20.8696 2.52628 23.6959 0.509366 26.2041C-0.737054 27.755 0.44947 30 2.49366 30H27.5063C29.5505 30 30.7371 27.755 29.4906 26.2041C27.4737 23.6972 20.4616 20.8696 14.9987 20.8696Z" fill="white"></path>
          </svg>
          <div className="absolute px-2 py-1 mt-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 rounded-md opacity-0 bg-primary top-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
            ALL DOCTORS
          </div>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => `relative group hover:cursor-pointer hover:bg-blue-700 p-2 rounded-full transition-all duration-500 ${isActive ? "bg-blue-700 ring-2 ring-blue-800" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6641 0C19.4231 0 19.2178 0.171203 19.1738 0.408203L18.9531 1.58398C18.8961 1.88898 18.6546 2.11669 18.3496 2.17969C18.0656 2.23869 17.7857 2.31239 17.5137 2.40039C17.2187 2.49639 16.8973 2.42055 16.6953 2.18555L15.9199 1.2793C15.7629 1.0963 15.4981 1.05283 15.2891 1.17383L14.7109 1.50781C14.5029 1.62781 14.4083 1.88042 14.4883 2.10742L14.8848 3.23438C14.9878 3.52637 14.8931 3.84378 14.6621 4.05078C14.4471 4.24378 14.2438 4.44711 14.0508 4.66211C13.8438 4.89311 13.5264 4.98972 13.2344 4.88672L12.1055 4.48828C11.8785 4.40828 11.6278 4.50194 11.5078 4.71094L11.1719 5.29102C11.0519 5.49902 11.0973 5.76487 11.2793 5.92188L11.377 6.00586C12.56 6.02586 13.572 6.87206 13.791 8.03906L13.8516 8.35742L14.0605 8.11133C14.5195 7.57733 15.1622 7.28695 15.8262 7.25195C16.7222 5.89695 18.255 5 20 5C22.761 5 25 7.239 25 10C25 11.745 24.103 13.2779 22.748 14.1719C22.713 14.8359 22.4227 15.4795 21.8887 15.9375L21.6426 16.1465L21.9609 16.207C23.1279 16.426 23.9741 17.4381 23.9941 18.6211L24.0781 18.7188C24.2351 18.9017 24.5 18.9472 24.709 18.8262L25.2891 18.4902C25.4971 18.3702 25.5917 18.1196 25.5117 17.8926L25.1133 16.7637C25.0103 16.4717 25.1069 16.1543 25.3379 15.9473C25.5529 15.7543 25.7562 15.5509 25.9492 15.3359C26.1562 15.1049 26.4736 15.0103 26.7656 15.1133L27.8926 15.5098C28.1196 15.5898 28.3722 15.4961 28.4922 15.2871L28.8262 14.707C28.9462 14.499 28.9027 14.2351 28.7207 14.0781L27.8145 13.3008C27.5795 13.0988 27.5036 12.7774 27.5996 12.4824C27.6876 12.2104 27.7613 11.9324 27.8203 11.6484C27.8833 11.3444 28.111 11.1029 28.416 11.0449L29.5918 10.8223C29.8288 10.7813 30 10.5769 30 10.3359V9.66406C30 9.42306 29.8288 9.21783 29.5918 9.17383L28.416 8.95312C28.111 8.89612 27.8833 8.65461 27.8203 8.34961C27.7613 8.06561 27.6876 7.78567 27.5996 7.51367C27.5036 7.21867 27.5795 6.89731 27.8145 6.69531L28.7207 5.91992C28.9037 5.76292 28.9472 5.49806 28.8262 5.28906L28.4922 4.71094C28.3722 4.50294 28.1196 4.40828 27.8926 4.48828L26.7656 4.88477C26.4736 4.98777 26.1562 4.89311 25.9492 4.66211C25.7562 4.44711 25.5529 4.24378 25.3379 4.05078C25.1069 3.84378 25.0103 3.52637 25.1133 3.23438L25.5117 2.10547C25.5917 1.87847 25.4981 1.62781 25.2891 1.50781L24.709 1.17188C24.501 1.05188 24.2351 1.0973 24.0781 1.2793L23.3027 2.18555C23.1007 2.42055 22.7794 2.49639 22.4844 2.40039C22.2124 2.31239 21.9324 2.23869 21.6484 2.17969C21.3444 2.11669 21.1029 1.88703 21.0449 1.58203L20.8242 0.40625C20.7822 0.17025 20.5769 0 20.3359 0H19.6641ZM10.6641 8C10.4231 8 10.2178 8.17025 10.1738 8.40625L9.98828 9.39453C9.91128 9.80553 9.58383 10.1084 9.17383 10.1914C8.83283 10.2604 8.49788 10.3481 8.17188 10.4551C7.77588 10.5851 7.34131 10.4879 7.07031 10.1719L6.41992 9.41211C6.26292 9.23011 5.99706 9.18664 5.78906 9.30664L5.21094 9.64062C5.00194 9.76062 4.90828 10.0132 4.98828 10.2402L5.32422 11.1914C5.46222 11.5854 5.33053 12.0091 5.01953 12.2871C4.76253 12.5171 4.51806 12.7606 4.28906 13.0176C4.01106 13.3286 3.58736 13.4603 3.19336 13.3223L2.24023 12.9883C2.01323 12.9083 1.76258 13.0029 1.64258 13.2109L1.30664 13.7891C1.18564 13.9981 1.23106 14.2629 1.41406 14.4199L2.17383 15.0703C2.48983 15.3413 2.58703 15.7759 2.45703 16.1719C2.35003 16.4979 2.26236 16.8328 2.19336 17.1738C2.11036 17.5838 1.80748 17.9113 1.39648 17.9883L0.408203 18.1738C0.171203 18.2178 0 18.4231 0 18.6641V19.3359C0 19.5769 0.17025 19.7822 0.40625 19.8262L1.39453 20.0117C1.80553 20.0887 2.10841 20.4162 2.19141 20.8262C2.26041 21.1682 2.34808 21.5021 2.45508 21.8281C2.58508 22.2241 2.48788 22.6587 2.17188 22.9297L1.41211 23.5801C1.23011 23.7371 1.18664 24.0029 1.30664 24.2109L1.64062 24.7891C1.76062 24.9981 2.01323 25.0917 2.24023 25.0117L3.19141 24.6758C3.58541 24.5378 4.00911 24.6695 4.28711 24.9805C4.51711 25.2375 4.76058 25.4819 5.01758 25.7109C5.32858 25.9889 5.46027 26.4126 5.32227 26.8066L4.98828 27.7598C4.90828 27.9868 5.00294 28.2374 5.21094 28.3574L5.78906 28.6934C5.99806 28.8144 6.26292 28.7689 6.41992 28.5859L7.07031 27.8262C7.34131 27.5102 7.77588 27.413 8.17188 27.543C8.49788 27.65 8.83283 27.7376 9.17383 27.8066C9.58383 27.8896 9.91128 28.1925 9.98828 28.6035L10.1738 29.5918C10.2178 29.8288 10.4231 30 10.6641 30H11.3359C11.5769 30 11.7822 29.8287 11.8242 29.5938L12.0098 28.6055C12.0868 28.1945 12.4142 27.8916 12.8242 27.8086C13.1662 27.7396 13.5002 27.6519 13.8262 27.5449C14.2222 27.4149 14.6567 27.5121 14.9277 27.8281L15.5781 28.5879C15.7351 28.7699 15.999 28.8153 16.207 28.6953L16.7871 28.3594C16.9961 28.2394 17.0898 27.9887 17.0098 27.7617L16.6758 26.8086C16.5378 26.4146 16.6695 25.9909 16.9805 25.7129C17.2375 25.4829 17.4819 25.2394 17.7109 24.9824C17.9889 24.6714 18.4136 24.5397 18.8066 24.6777L19.7598 25.0117C19.9868 25.0917 20.2374 24.9971 20.3574 24.7891L20.6934 24.2109C20.8144 24.0019 20.7689 23.7371 20.5859 23.5801L19.8262 22.9297C19.5102 22.6587 19.413 22.2241 19.543 21.8281C19.65 21.5021 19.7376 21.1672 19.8066 20.8262C19.8896 20.4162 20.1925 20.0887 20.6035 20.0117L21.5918 19.8262C21.8288 19.7822 22 19.5769 22 19.3359V18.6641C22 18.4231 21.8287 18.2188 21.5938 18.1758L20.6055 17.9902C20.1945 17.9132 19.8916 17.5838 19.8086 17.1738C19.7396 16.8328 19.6519 16.4979 19.5449 16.1719C19.4149 15.7759 19.5121 15.3433 19.8281 15.0723L20.5879 14.4219C20.7699 14.2649 20.8153 13.999 20.6953 13.791L20.3594 13.2109C20.2394 13.0019 19.9887 12.9083 19.7617 12.9883L18.8086 13.3242C18.4146 13.4622 17.9909 13.3305 17.7129 13.0195C17.4829 12.7625 17.2394 12.5181 16.9824 12.2891C16.6714 12.0111 16.5397 11.5874 16.6777 11.1934L17.0117 10.2402C17.0917 10.0132 16.9971 9.76258 16.7891 9.64258L16.2109 9.30664C16.0019 9.18564 15.7371 9.23106 15.5801 9.41406L14.9297 10.1738C14.6587 10.4898 14.2241 10.587 13.8281 10.457C13.5021 10.35 13.1672 10.2624 12.8262 10.1934C12.4162 10.1104 12.0887 9.80748 12.0117 9.39648L11.8262 8.4082C11.7822 8.1712 11.5769 8 11.3359 8H10.6641ZM20 9C19.448 9 19 9.448 19 10C19 10.552 19.448 11 20 11C20.552 11 21 10.552 21 10C21 9.448 20.552 9 20 9ZM11 13C14.314 13 17 15.686 17 19C17 22.314 14.314 25 11 25C7.686 25 5 22.314 5 19C5 15.686 7.686 13 11 13ZM11 17C9.895 17 9 17.895 9 19C9 20.105 9.895 21 11 21C12.105 21 13 20.105 13 19C13 17.895 12.105 17 11 17Z" fill="white"></path>
          </svg>
          <div className="absolute px-2 py-1 mt-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 rounded-md opacity-0 bg-primary top-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
            ABOUT
          </div>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => `relative group hover:cursor-pointer hover:bg-blue-700 p-2 rounded-full transition-all duration-500 ${isActive ? "bg-blue-700 ring-2 ring-blue-800" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4672 19.4199C21.9377 19.1095 21.2868 19.116 20.7598 19.4291L18.0912 21.0191C17.4938 21.3751 16.7477 21.3334 16.1999 20.9056C15.2529 20.166 13.7282 18.9217 12.4016 17.5952C11.0751 16.2687 9.8308 14.7439 9.09124 13.7969C8.66342 13.2491 8.62168 12.503 8.97776 11.9057L10.5677 9.23697C10.8821 8.71002 10.8847 8.05394 10.5743 7.52438L6.65865 0.835732C6.27909 0.188781 5.52518 -0.129478 4.79606 0.0492166C4.0878 0.221389 3.16825 0.641386 2.20434 1.6066C-0.813896 4.62483 -2.41693 9.71567 8.93342 21.066C20.2838 32.4164 25.3733 30.8146 28.3928 27.7951C29.3593 26.8286 29.778 25.9077 29.9515 25.1982C30.1276 24.4703 29.8145 23.7216 29.1689 23.3434C27.5567 22.4004 24.0794 20.3643 22.4672 19.4199Z" fill="white"></path>
          </svg>
          <div className="absolute px-2 py-1 mt-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 rounded-md opacity-0 bg-primary top-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
            CONTACT
          </div>
        </NavLink>
        {/* ---------- Panel Button ---------- */}
        <a href="https://click2cure-panel.onrender.com" className="relative p-2 transition-all duration-500 rounded-full group hover:cursor-pointer hover:bg-blue-700">
          <svg fill="#ffffff" height="23px" width="23px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 298.5 298.5" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path d="M141.44,148.946l32.8-12.533c-7.104-5.939-15.155-10.751-23.881-14.179c-10.071,6.497-21.529,9.968-33.541,9.968 c-12.012,0-23.47-3.471-33.541-9.968c-28.552,11.217-49.954,37.199-54.202,69.215l-7.874,59.353 c-0.543,4.091,0.706,8.218,3.425,11.321c2.719,3.104,6.646,4.884,10.773,4.884h107.543c-12.796-24.051-21.958-54.054-24.581-80.727 C116.77,170.099,126.26,154.747,141.44,148.946z"></path>
                <ellipse cx="116.818" cy="56.101" rx="47.538" ry="56.101"></ellipse>
                <path d="M267.03,167.629l-53.452-20.425c-1.859-0.71-3.816-1.066-5.774-1.066c-1.957,0-3.915,0.355-5.774,1.066l-53.452,20.425 c-6.805,2.6-11.027,9.444-10.314,16.694c4.668,47.461,33.949,114.177,69.54,114.177c35.59,0,64.871-66.716,69.539-114.177 C278.058,177.062,273.846,170.233,267.03,167.629z"></path>
              </g>
            </g>
          </svg>
          <div className="absolute px-2 py-1 mt-4 text-white transition-all duration-500 transform scale-50 -translate-x-1/2 rounded-md opacity-0 bg-primary top-full left-1/2 w-max group-hover:opacity-100 group-hover:scale-100">
            Panel
          </div>
        </a>
      </nav>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='relative flex items-center gap-2 cursor-pointer group'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block'>
                <div className='flex flex-col gap-4 p-4 rounded min-w-48 bg-gray-50'>
                  <p onClick={() => navigate('/my-profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='cursor-pointer hover:text-black'>My Appointments</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='hidden px-8 py-3 font-light text-white rounded-full bg-primary md:block'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden fixed inset-0 z-30 transition-all duration-500 ease-in-out ${showMenu ? 'backdrop-blur-md bg-white/80 opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-6 border-b border-gray-300">
            <img src={assets.logo} className="select-none w-36" alt="Logo" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="transition-transform duration-300 cursor-pointer w-7 hover:scale-110" alt="Close" />
          </div>

          {/* Smooth link list */}
          <ul className={`flex flex-col items-center gap-5 px-5 mt-8 transition-all duration-500 ease-out ${showMenu ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            {[
              { name: 'HOME', path: '/' },
              { name: 'ALL DOCTORS', path: '/doctors' },
              { name: 'ABOUT', path: '/about' },
              { name: 'CONTACT', path: '/contact' },
            ].map((item, index) => (
              <NavLink key={index} onClick={() => setShowMenu(false)} to={item.path} className={({ isActive }) => `w-[80%] text-center bg-blue-200 hover:bg-blue-400 text-black font-semibold py-3 rounded-full shadow-md hover:text-white transition-transform duration-300 ease-out hover:scale-105 active:scale-95 ${isActive ? 'bg-blue-400 text-white scale-105' : ''}`}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
