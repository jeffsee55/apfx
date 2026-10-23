"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export function SheetContent({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
      <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(90vw,380px)] border-l border-white/10 bg-[#111722] p-8 shadow-2xl">
        <Dialog.Title className="sr-only">Navigation</Dialog.Title>
        <Dialog.Description className="sr-only">
          APFX pages and account access
        </Dialog.Description>
        <Dialog.Close
          className="absolute right-6 top-6 rounded-md p-2 hover:bg-white/10"
          aria-label="Close menu"
        >
          <X />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
