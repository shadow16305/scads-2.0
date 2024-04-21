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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

const SwapModal: React.FC<{ navigation: boolean }> = ({ navigation }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <button
            type="button"
            className="relative transition hover:text-neutral-400"
          >
            Invest
          </button>
        ) : (
          <Button className="px-10">Invest</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[360px] rounded-3xl border-none bg-[#0c0e22] md:max-w-lg">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-semibold text-white">
            Swap
          </DialogTitle>
          <DialogDescription>
            <Tabs defaultValue="scads">
              <TabsList className="flex justify-start gap-x-2 bg-transparent">
                <TabsTrigger
                  value="scads"
                  className="rounded-3xl border border-white/10 bg-white/[.02] px-4 py-1 text-sm text-white"
                >
                  SCADS
                </TabsTrigger>
                <TabsTrigger
                  value="twine"
                  className="rounded-3xl border border-white/10 bg-white/[.02] px-4 py-1 text-sm text-white"
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
