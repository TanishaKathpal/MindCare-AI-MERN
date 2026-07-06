import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getCurrentUser } from "../services/userService";

function AppLayout({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const data = await getCurrentUser();

        setUser(data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchUser();

  }, []);

  return (

    <div className="flex min-h-screen bg-slate-100">

      <Sidebar user={user} />

      <main className="flex-1 overflow-y-auto p-8">

        {children}

      </main>

    </div>

  );

}

export default AppLayout;