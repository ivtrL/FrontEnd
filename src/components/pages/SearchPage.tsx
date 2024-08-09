import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function SearchPage() {
  return (
    <main className="min-h-screen h-[200vh]">
      <aside>
        <nav>
          <Accordion type="multiple">
            <AccordionItem value="teste">
              <AccordionTrigger>Teste</AccordionTrigger>
              <AccordionContent>Teste</AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>
      </aside>
      <section></section>
    </main>
  );
}
