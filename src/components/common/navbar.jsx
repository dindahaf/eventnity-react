export function Navbar() {
  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          <div class="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              class="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 "
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                {" "}
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h14M1 6h14M1 11h7"
                />{" "}
              </svg>
            </button>
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 "
            >
              <svg
                class="w-[18px] h-[18px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span class="sr-only">Toggle sidebar</span>
            </button>
            <a href="https://flowbite.com" class="flex mr-4">
              <img
                src="https://flowbite.s3.amazonaws.com/logo.svg"
                class="mr-3 h-8"
                alt="FlowBite Logo"
              />
              
            </a>
          </div>
          <div class="flex items-center lg:order-2">
              <button type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
              {/* Dropdown menu */}
              <div class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow " id="dropdown">
                  <div class="py-3 px-4">
                      <span class="block text-sm font-semibold text-gray-900 ">Neil sims</span>
                      <span class="block text-sm text-gray-500 truncate ">name@flowbite.com</span>
                  </div>
                  <ul class="py-1 text-gray-500 " aria-labelledby="dropdown">
                      <li>
                          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">My profile</a>
                      </li>
                      <li>
                          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">Logout</a>
                      </li>
                  </ul>
                  
                  <ul class="py-1 text-gray-500" aria-labelledby="dropdown">
                      <li>
                          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">Sign out</a>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
