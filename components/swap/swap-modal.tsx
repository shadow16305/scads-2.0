import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ScadsForm from "./scads-form";
import TwineForm from "./twine-form";
import ButtonPrimary from "../ui/button-primary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const SwapModal: React.FC<{ navigation: boolean }> = ({ navigation }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <button
            type="button"
            className="relative transition hover:text-neutral-700 dark:hover:text-neutral-400"
          >
            Invest
          </button>
        ) : (
          <ButtonPrimary text="Invest" onClick={() => {}} className="px-10" />
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[360px] rounded-3xl border-none bg-[#F4F3F2] dark:bg-[#0c0e22] md:max-w-lg">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-semibold text-black dark:text-white">
            Swap
          </DialogTitle>
          <DialogDescription>
            <Tabs defaultValue="scads">
              <TabsList className="flex justify-start gap-x-2 bg-transparent dark:bg-transparent">
                <TabsTrigger
                  value="scads"
                  className="rounded-3xl border border-white/10 bg-white/[.02] px-4 py-1 text-sm text-black dark:text-white"
                >
                  SCADS
                </TabsTrigger>
                <TabsTrigger
                  value="twine"
                  className="rounded-3xl border border-white/10 bg-white/[.02] px-4 py-1 text-sm text-black dark:text-white"
                >
                  TWINE
                </TabsTrigger>
              </TabsList>
              <TabsContent value="scads">
                <ScadsForm panel="scads" />
              </TabsContent>
              <TabsContent value="twine">
                <TwineForm panel="twine" />
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SwapModal;
