"use client"
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import WhatsappChat from "@/components/shared/Reuse/WhatsappChat";


const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store} >
            <Toaster />
            {children}
            <WhatsappChat />
        </Provider>
    );
};

export default Providers;