import Breadcrumbs from '@/component/global/breadcrumbs';
import JobOpeningCard from '@/pages/career-details/subComponents/job-hiring-card';
import ApplicationForm from "../../component/application-form";


export default function Careerdetails() {
  return (
    <section className='details'>
      <Breadcrumbs />

      <JobOpeningCard />
      <ApplicationForm />
    </section>
  );
}
