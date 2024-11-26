"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Space_Mono } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const Overview = () => {
  return (
    <>
      <header className="fixed w-full top-0 z-[100] shadow-lg after:absolute after:inset-0 after:shadow-[0_4px_12px_rgba(0,0,0,0.2)] after:pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC700] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFC700]/5 to-transparent pointer-events-none" />
        <nav className="bg-[#F5F1E6] px-2 py-2 flex flex-row items-center justify-between w-full relative min-h-[40px] z-50">
          <div className="flex items-center">
            <Link href="https://collab.land" className="transform transition-transform hover:scale-105">
              {/* Desktop logo */}
              <Image
                src="/Logo-Color.png"
                alt="Collab.Land"
                width={200}
                height={40}
                className="h-6 w-auto hover:brightness-110 transition-all hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/LogoIconColor.svg"
                alt="Collab.Land"
                width={32}
                height={32}
                className="h-7 w-auto hover:brightness-110 transition-all md:hidden"
                priority
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            {/* About Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-[13px] h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  About <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://collab.land/overview", label: "Overview" },
                    { href: "https://collab.land/team", label: "Team" },
                    { href: "https://docs.collab.land/dao/token/token_overview", label: "$COLLAB" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-[13px]
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Admins Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className={`text-[13px] h-8 px-3 py-1 text-[#1A1A40] hover:text-[#FFB800] transition-all duration-300 ${spaceMono.className} font-bold relative group hover:bg-[#FFC700]/10 data-[state=open]:bg-[#FFC700]/10`}>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Admins <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={`w-48 bg-[#FFC700] border-none rounded-lg shadow-lg ${spaceMono.className} backdrop-blur-sm relative z-[200] before:absolute before:inset-0 before:border-2 before:border-black/10 before:rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-lg after:pointer-events-none`} sideOffset={4} align="center" side="bottom">
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://cc.collab.land", label: "Command Center" },
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://invite.collab.land", label: "Invite" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://pricing.collab.land", label: "Premium" }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-[#1A1A40] text-[13px] font-bold hover:bg-[#FFC700]/80 hover:translate-x-1 transition-all duration-200 relative group">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Resources Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className={`text-[13px] h-8 px-3 py-1 text-[#1A1A40] hover:text-[#FFB800] transition-all duration-300 ${spaceMono.className} font-bold relative group hover:bg-[#FFC700]/10 data-[state=open]:bg-[#FFC700]/10`}>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Resources <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={`w-48 bg-[#FFC700] border-none rounded-lg shadow-lg ${spaceMono.className} backdrop-blur-sm relative z-[200] before:absolute before:inset-0 before:border-2 before:border-black/10 before:rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-lg after:pointer-events-none`} sideOffset={4} align="center" side="bottom">
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://collabland.substack.com/", label: "Newsletter" },
                    { href: "https://collab.land/security", label: "Security" },
                    { href: "https://collabland.freshdesk.com/support/tickets/new", label: "Support" },
                    { href: "https://medium.com/collab-land", label: "Updates" },
                    { href: "https://www.youtube.com/channel/UCmyt5i7JmBPd03r2eJ-EaMA", label: "YouTube" }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-[#1A1A40] text-[13px] font-bold hover:bg-[#FFC700]/80 hover:translate-x-1 transition-all duration-200 relative group">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Socials Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className={`text-[13px] h-8 px-3 py-1 text-[#1A1A40] hover:text-[#FFB800] transition-all duration-300 ${spaceMono.className} font-bold relative group hover:bg-[#FFC700]/10 data-[state=open]:bg-[#FFC700]/10`}>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Socials <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={`w-48 bg-[#FFC700] border-none rounded-lg shadow-lg ${spaceMono.className} backdrop-blur-sm relative z-[200] before:absolute before:inset-0 before:border-2 before:border-black/10 before:rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-lg after:pointer-events-none`} sideOffset={4} align="center" side="bottom">
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://discord.gg/collabland", label: "Discord" },
                    { href: "https://www.instagram.com/collab_land_", label: "Instagram" },
                    { href: "https://linktr.ee/collab_land_", label: "Linktree" },
                    { href: "https://twitter.com/Collab_Land_", label: "X" }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-[#1A1A40] text-[13px] font-bold hover:bg-[#FFC700]/80 hover:translate-x-1 transition-all duration-200 relative group">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>

      <main className="py-6 space-y-6 animate-fade-in mt-20 min-h-screen">
        <section className="container max-w-5xl space-y-3">
          <h2 className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-center text-[#F5F1E6] mb-4">Overview</h2>
          <div className="grid gap-3 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="md:col-span-2 max-w-4xl mx-auto">
              <p className={`mb-8 text-xs sm:text-sm text-[#8C92AC] text-center ${spaceMono.className}`}>
                Collab.Land burst onto the scene in May 2020, redefining how online communities connect when the world was forced to go virtual. As DAOs stepped into the spotlight as the future of collaboration, Collab.Land became the indispensable tool for managing tokenized memberships with ease. During DeFi Summer 2020, we powered investment groups; by Spring 2021, we were at the heart of the NFT explosion. Today, gaming guilds, blockchain protocols, NFT juggernauts, DeFi innovators, and DAOs worldwide rely on Collab.Land to lead the token-gated experience. We don't just adapt to Web3—Collab.Land defines what's next.
              </p>
            </div>
            <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[150px] flex flex-col">
              <CardHeader className="pb-0 pt-4 px-4 text-center">
                <CardTitle className="text-lg font-bold text-[#1A1A40]">How it Works</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto p-3 text-center">
                <p className="text-[#1A1A40] text-xs font-sans">Collab.Land is read-only, accessing public blockchains to verify wallet ownership and token holdings for role or group membership. Adding a wallet requires signing a message to confirm ownership. Collab.Land does not access private data, only public wallet addresses visible to all.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[150px] flex flex-col">
              <CardHeader className="pb-0 pt-4 px-4 text-center">
                <CardTitle className="text-lg font-bold text-[#1A1A40]">Key Features</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto p-3 text-center">
                <p className="text-[#1A1A40] text-xs font-sans">Collab.Land provides token-gating to verify and manage community membership with ease. The admin portal gives leaders tools to manage the bot and resolve member issues efficiently. Additionally, a variety of miniapps are available to enrich and elevate your community's experience.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[150px] flex flex-col">
              <CardHeader className="pb-0 pt-4 px-4 text-center">
                <CardTitle className="text-lg font-bold text-[#1A1A40]">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto p-3 text-center">
                <p className="text-[#1A1A40] text-xs font-sans">Connect your wallet with your Discord or Telegram ID and join a community of like-minded stakeholders in just a few clicks. As a member, you'll gain access to token-gated spaces where you can meet and engage with others who are interested in the project.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[150px] flex flex-col">
              <CardHeader className="pb-0 pt-4 px-4 text-center">
                <CardTitle className="text-lg font-bold text-[#1A1A40]">Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto p-3 text-center">
                <p className="text-[#1A1A40] text-xs font-sans">Collab.Land enhances coordination within groups by streamlining access and simplifying member management, making it easier for communities to collaborate effectively. By bridging projects and token holders, we empower seamless teamwork and foster stronger, more connected communities.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-full bg-[#1A1A40] pt-4 pb-8 border-t-2 border-b-2 border-[#3A3A6E]">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-center text-[#F5F1E6] mb-4">Identifying Collab.Land</h2>
            <div className="grid gap-3 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-base sm:text-xl lg:text-2xl font-bold text-[#1A1A40]">
                    Discord
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-center">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#FFC700]/70">
                    <Image
                      src="/DiscordBotInfo.png"
                      alt="Collab.Land Discord Bot Information"
                      fill
                      className="object-cover"
                      quality={95}
                    />
                  </div>
                  <p className="text-[#1A1A40] text-sm font-sans">Look for the verified Collab.Land bot with a unique avatar and "BOT" tag next to its name. Make sure you're always using the verified Discord bot Collab.Land <strong>#6372</strong> and with developer-mode activated, you can also validate the Collab.Land Bot Discord UserID: <strong>704521096837464076</strong></p>
                </CardContent>
              </Card>
              <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-base sm:text-xl lg:text-2xl font-bold text-[#1A1A40]">
                    Telegram
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-center">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-[#FFC700]/70">
                    <Image
                      src="/TGBotInfo.png"
                      alt="Collab.Land Telegram Bot Profile"
                      fill
                      className="object-cover"
                      quality={95}
                    />
                  </div>
                  <p className="text-[#1A1A40] text-sm font-sans">To identify the real Collab.Land bot on Telegram, ensure the username is ONLY <strong>@collablandbot</strong> as shown in the image.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#1A1A40] pt-2 pb-8 px-6">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-center text-[#F5F1E6] mb-4">$COLLAB</h2>
            <div className="grid gap-3 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="col-span-2 max-w-2xl mx-auto">
                <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300">
                  <CardHeader className="pb-0 text-center">
                    <CardTitle className="text-lg md:text-xl font-bold text-[#1A1A40]"></CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-2 px-4">
                    <p className="text-[#1A1A40] text-sm font-sans">The $COLLAB token, launched in February 2023 as a free retroactive distribution to Collab.Land members and communities, embodies the spirit of community-led development. Issued by the Collab.Land Coop, $COLLAB serves as a governance token, giving users a role in shaping the platform's future. It reinforces our belief that the future of Web3 is built by the communities it serves.</p>
                    <p className="text-[#1A1A40] text-sm font-sans mt-2">Learn more <a href="https://us02web.zoom.us/j/5104993778?pwd=ek5nTFc5ZmJsUUdNRXNyeFFRWHRxZz09" className="text-[#8C92AC] hover:underline hover:text-[#1A1A40] transition-colors duration-300" target="_blank" rel="noopener noreferrer">here</a>.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FFC700] py-1">
        <div className="w-full px-2">
          <div className="flex flex-row justify-between items-center max-w-[1920px] mx-auto">
            <nav className="flex space-x-2.5">
              <Link 
                href="https://www.collab.land/privacy-policy" 
                className={`text-[11px] font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.collab.land/terms-of-service" 
                className={`text-[11px] font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Terms
              </Link>
            </nav>
            
            <div className="flex items-center space-x-2">
              <Link href="https://linktr.ee/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-6 w-6 p-0.5 hover:bg-transparent group">
                  <Image 
                    src="/LinktreeIcon.svg" 
                    alt="Linktree" 
                    width={16} 
                    height={16} 
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
              <Link href="https://discord.gg/collabland" target="_blank">
                <Button size="icon" variant="ghost" className="h-6 w-6 p-0.5 hover:bg-transparent group">
                  <Image 
                    src="/DiscordIcon.svg" 
                    alt="Discord" 
                    width={16} 
                    height={16}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75" 
                  />
                </Button>
              </Link>
              <Link href="https://x.com/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-6 w-6 p-0.5 hover:bg-transparent group">
                  <Image 
                    src="/XIcon.svg" 
                    alt="X (formerly Twitter)" 
                    width={16} 
                    height={16}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
            </div>

            <p className={`text-[11px] font-bold flex items-center gap-1 text-[#1A1A40] ${spaceMono.className}`}>
              <Image 
                src="/LogoIcon.svg" 
                alt="Collab.Land Logo" 
                width={14} 
                height={14} 
                className="inline-block"
              />
              Collab.Land® 2024
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Overview; 
