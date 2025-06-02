"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast" // Assurez-vous que use-toast est disponible

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Le nom complet doit contenir au moins 2 caractères." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Veuillez saisir une adresse email valide." }),
  phone: z.string().optional(),
  subject: z.enum(
    [
      "Demande de devis Site Vitrine",
      "Demande de devis E-commerce",
      "Demande de devis Application Web",
      "Question générale",
      "Autre",
    ],
    { required_error: "Veuillez sélectionner un objet." },
  ),
  message: z.string().min(10, { message: "Votre message doit contenir au moins 10 caractères." }),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité.",
  }),
})

export default function ContactFormSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Ici, vous intégreriez la logique d'envoi du formulaire (ex: API, Server Action)
    console.log(values)
    // Simuler un envoi réussi
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast({
      title: "Message envoyé !",
      description: "Nous avons bien reçu votre message et vous répondrons rapidement.",
    })
    form.reset() // Réinitialiser le formulaire après soumission
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message.</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet *</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom complet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Société</FormLabel>
                <FormControl>
                  <Input placeholder="Nom de votre société (optionnel)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Votre adresse email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Votre numéro de téléphone (optionnel)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Objet de votre demande *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un objet" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Demande de devis Site Vitrine">Demande de devis Site Vitrine</SelectItem>
                    <SelectItem value="Demande de devis E-commerce">Demande de devis E-commerce</SelectItem>
                    <SelectItem value="Demande de devis Application Web">Demande de devis Application Web</SelectItem>
                    <SelectItem value="Question générale">Question générale</SelectItem>
                    <SelectItem value="Autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre message *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Décrivez votre projet ou votre question..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="privacyPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    J'accepte la{" "}
                    <a
                      href="/politique-de-confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-600"
                    >
                      politique de confidentialité
                    </a>
                    . *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Envoi en cours..." : "Envoyer votre message"}
          </Button>
        </form>
      </Form>
      <p className="mt-6 text-center text-sm text-gray-600">Nous vous répondons généralement sous 24/48h ouvrées.</p>
    </div>
  )
}
