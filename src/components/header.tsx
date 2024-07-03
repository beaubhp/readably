import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleFlag } from "react-circle-flags";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const SpanishFlag = () => <CircleFlag countryCode="es" width="20" />;
const EnglishFlag = () => <CircleFlag countryCode="us" width="20" />;
const JapaneseFlag = () => <CircleFlag countryCode="jp" width="20" />;
const FrenchFlag = () => <CircleFlag countryCode="fr" width="20" />;
const ItalianFlag = () => <CircleFlag countryCode="it" width="20" />;
const ChineseFlag = () => <CircleFlag countryCode="cn" width="20" />;

export function Header() {
  return (
    <ClerkProvider>
      <header className="container flex items-center justify-between gap-10 py-4">
        <Link href="#" className="flex items-center gap-3">
          <span className="font-heading font-bold text-2xl">Readably</span>
        </Link>
        <div className="flex items-center gap-10">
          <nav className="hidden items-center gap-10 md:flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Language&nbsp;
                  <span>
                    <ChevronDown size="16"></ChevronDown>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <EnglishFlag></EnglishFlag>
                  <span>&nbsp;&nbsp;English</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SpanishFlag></SpanishFlag>
                  <span>&nbsp;&nbsp;Spanish</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ChineseFlag></ChineseFlag>
                  <span>&nbsp;&nbsp;Chinese</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ItalianFlag></ItalianFlag>
                  <span>&nbsp;&nbsp;Italian</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <JapaneseFlag></JapaneseFlag>
                  <span>&nbsp;&nbsp;Japanese</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FrenchFlag></FrenchFlag>
                  <span>&nbsp;&nbsp;French</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <SignedOut>
              <Button asChild variant="outline" size="lg">
                <SignInButton>Log in</SignInButton>
              </Button>
              <Button asChild size="lg">
                <SignUpButton>Sign up</SignUpButton>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <MobileNavbar>
          <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              <Link
                href="/about"
                className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
              >
                Language
              </Link>
              <Button asChild size="lg" variant="outline" className="mt-2 w-full">
                <Link href="#" className="cursor-pointer">
                  Log in
                </Link>
              </Button>
              <Button asChild size="lg" className="mt-2 w-full">
                <Link href="#" className="cursor-pointer">
                  Sign up
                </Link>
              </Button>
            </nav>
          </div>
        </MobileNavbar>
      </header>
    </ClerkProvider>
  );
}
