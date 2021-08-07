import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivitiesComponent } from '../components/Main/MainActivitiesComponent'
import { MainAdvantages } from '../components/Main/MainAdvantages'
import { MainLicensesComponent } from '../components/Main/MainLicensesComponent'
import { HeadingComponent } from '../components/Heading/HeadingComponent'
import { MainStartIntro } from '../components/Main/MainStartIntro'
import { MainCentersComponent } from '../components/Main/MainCentersComponent'
import { MainDoctorsComponent } from '../components/Main/MainDoctorsComponent'
import { MainPresale } from '../components/Main/MainPresale'

// import data
import { main_info } from '../data/main/main_info'
import { carousel } from '../data/main/carousel/main_carousel'

export default function HomePage() {
  
  return (
    <MainLayout
      title={main_info.title}
      description={main_info.description}
    >
      <CarouselComponent
        data={carousel}
      />
      <MainActivitiesComponent />
      <HeadingComponent 
        heading='Центр кинезитерапии'
      />
      <MainPresale />
      <HeadingComponent 
        heading='Как проходит лечение'
      />
      <MainStartIntro />
      <MainAdvantages />

{/*      
      <HeadingComponent 
        heading='Наши центры'
      />
      <MainCentersComponent/>
 */}

{/* 
      <HeadingComponent 
        heading='Наши врачи'
      />
      <MainDoctorsComponent />
*/}

{/* 
      <HeadingComponent 
        heading='Лицензции и заключения'
      />
      <MainLicensesComponent/>
*/}

     </MainLayout>
  )
}