import { Input } from "@/app/components/input/input"
import { Label } from "@/app/components/label/label"
import { Textarea } from "@/app/components/textarea/textarea"
import { ChevronDown } from "lucide-react"
import PageHeading from "@/app/components/page-heading/page-heading"
import Button from "@/app/components/button/button"
import Image from "next/image"

export default function EditProfilePage() {
  return (
    <div className="max-w-3xl ">
      <PageHeading
        params={{ content: "Edit profile", className: "capitalize mb-4 text-3xl mt-0 pt-0" }}
      />   
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" labelName="Name" type="text" className="w-full" defaultValue="Mykhailo Nyskohuz" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" labelName="Email" type="email" defaultValue="mn508678@gmail.com" />
          </div>
          <div>
            <Label htmlFor="phone1">Phone # 1</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image src="/icons/ua-flag.svg" width={30} height={20} alt="Flag" className="w-5 h-3" />
              </div>
              <ChevronDown className="absolute inset-y-0 right-0 flex items-center pr-3 h-full" />
              <Input id="phone1" labelName="Phone # 1" type="text" className="pl-10 pr-8" />
            </div>
          </div>
          <div>
            <Label htmlFor="phone2">Phone # 2</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image src="/icons/ua-flag.svg" width={30} height={20} alt="Flag" className="w-5 h-3" />
              </div>
              <ChevronDown className="absolute inset-y-0 right-0 flex items-center pr-3 h-full" />
              <Input id="phone2" labelName="Phone # 2" type="text" className="pl-10 pr-8" />
            </div>
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input id="company" labelName="Company" type="text" />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" labelName="Website" type="text" />
          </div>
        </div>
        <div>
          <Label htmlFor="comments">Comments</Label>
          <Textarea id="comments" labelName="Comments" rows={4} />
        </div>
        <Button
          params={{
            content: "Save",
            url: "/account/editprofile",
            className: "mt-4 secondary-btn",
          }}
        />
      </form>
    </div>
  )
}