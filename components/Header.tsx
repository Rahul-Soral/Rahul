import { Button, Menu as MuiMenu, MenuItem } from "@mui/material"
import Link from "next/link"
import { Menu, Download } from "lucide-react"
import { useState } from "react"

const navItems: string[] = ["About", "Projects", "Skills", "Contact"]

export default function  Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 text-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">Rahul Soral</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-md font-medium hover:text-teal-600 transition-colors ">
              {item}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing"
            className="ml-4 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition-all px-4 py-2 rounded-md border inline-flex items-center"
            download="Rahul_Soral_Resume.pdf"
            target="blank"
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </nav>
        <div className="md:hidden">
          <Button
            variant="outlined"
            size="small"
            className="text-teal-600 border-teal-600"
            onClick={handleClick}
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <MuiMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: { backgroundColor: "rgb(240 253 250)", border: "1px solid rgb(125 211 252)" },
            }}
          >
            {navItems.map((item) => (
              <MenuItem key={item} onClick={handleClose} className="text-teal-800 hover:bg-teal-200">
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </MenuItem>
            ))}
            <MenuItem onClick={handleClose} className="text-teal-800 hover:bg-teal-200">
              <a
                href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing"
                download="Rahul_Soral_Resume.pdf"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </MenuItem>
          </MuiMenu>
        </div>
      </div>
    </header>
  )
}
