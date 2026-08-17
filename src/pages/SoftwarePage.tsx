import ExperienceList from "../components/ExperienceList";
import Header from "../components/Header";
import Profile from "../components/Profile";

export default function SoftwarePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[70rem] px-5 pb-10 pt-[7.2rem]">
        <Profile />
        <ExperienceList />
      </main>
    </>
  );
}
