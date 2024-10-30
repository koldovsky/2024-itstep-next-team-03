import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown } from "lucide-react"
import PageHeading from "@/app/components/page-heading/page-heading"
import Button from "@/app/components/button/button"
export default function EditProfilePage() {
  return (
    <div className="max-w-3xl ">
      {/* <h1 className="text-3xl font-bold mb-6">Редагувати профіль</h1> */}
      <PageHeading
        params={{ content: "Edit profile", className: "capitalize mb-4 text-3xl mt-0 pt-0" }}
      />   
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Ім'я прізвище</Label>
            <Input id="name" className="w-full" defaultValue="Mykhailo Nyskohuz" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="mn508678@gmail.com" />
          </div>
          <div>
            <Label htmlFor="phone1">Телефон # 1</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/placeholder.svg?height=20&width=30" alt="Flag" className="w-5 h-3" />
              </div>
              <ChevronDown className="absolute inset-y-0 right-0 flex items-center pr-3 h-full" />
              <Input id="phone1" className="pl-10 pr-8" />
            </div>
          </div>
          <div>
            <Label htmlFor="phone2">Телефон # 2</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/placeholder.svg?height=20&width=30" alt="Flag" className="w-5 h-3" />
              </div>
              <ChevronDown className="absolute inset-y-0 right-0 flex items-center pr-3 h-full" />
              <Input id="phone2" className="pl-10 pr-8" />
            </div>
          </div>
          <div>
            <Label htmlFor="company">Компанія</Label>
            <Input id="company" />
          </div>
          <div>
            <Label htmlFor="website">Веб-сайт</Label>
            <Input id="website" />
          </div>
        </div>
        <div>
          <Label htmlFor="comments">Коментарі</Label>
          <Textarea id="comments" rows={4} />
        </div>
        {/* <Button type="submit" className="w-32 bg-gray-200 text-black hover:bg-gray-300">
          ЗБЕРЕГТИ
        </Button> */}
        <Button
          params={{
            content: "Save",
            url: "/account/editprofile",
            className: "mt-4",
          }}
        />
      </form>
    </div>
  )
}