import { AiOutlineFieldTime, BsCalendarDate, BsSave, MdOutlineAutoFixHigh } from 'react-icons/all'

const configurations = [
  {
    icon: <BsCalendarDate className="text-4xl" />,
    title: 'Date format',
    description: 'Define format for date'
  },
  {
    icon: <AiOutlineFieldTime className="text-4xl" />,
    title: 'Datetime format',
    description: 'Define format for date including time'
  },
  {
    icon: <BsSave className="text-4xl"/>,
    title: 'Keep original',
    description: 'You can keep your original when you move, rename or organize'
  },
  {
    icon: <MdOutlineAutoFixHigh className="text-4xl" />,
    title: 'File name',
    description: 'If there is file which has same name, prompt to enter or automatic rename'
  }
]

function ConfigurationSection() {
  return (
    <section className="hero bg-base-200 md:py-24 md:px-0 px-4 py-12">
      <div className="hero-content max-w-content w-full">
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-bold">Configurations</h1>
          <p className="py-6 text-xl">
            Customize programs on your preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 p-0 md:py-4 md:p-0">
            { configurations.map(configurationEl => (
              <div
                key={ configurationEl.title }
                className="animate__animated card bg-base-100"
                data-animate="animate__fadeInDown"
              >
                <div className="card-body flex flex-col items-center gap-0">
                  { configurationEl.icon }
                  <div className="text-lg font-semibold mt-4">
                    { configurationEl.title }
                  </div>
                  <p className="text-sm mt-1 text-center">
                    { configurationEl.description }
                  </p>
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConfigurationSection
