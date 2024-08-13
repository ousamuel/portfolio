import SkillsList from "../Skills";
export default function SkillsComp() {
  return (
    <section
      className="w-full px-5 text-md flex flex-col items-center justify-center 
 sm:w-4/5 md:text-3xl"
    >
      <h1 className="py-3 text-center leading-none">Technical Skills</h1>
      <p className="text-xl"> Languages, Frameworks, Libraries, Tools</p>

      <SkillsList />
    </section>
  );
}
