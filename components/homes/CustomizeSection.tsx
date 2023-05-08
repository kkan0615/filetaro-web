function CustomizeSectionHomes() {
  return (
    <section className="hero bg-base-200 md:py-24 md:px-0 px-4 py-12">
      <div className="hero-content max-w-content w-full">
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-bold">Keywords</h1>
          <p className="py-6 text-xl">
            You can make a text with special keywords! We are currently supporting following keywords
          </p>
          <div
            className="animate__animated"
            data-animate="animate__fadeInDown"
          >
            <table className="table w-full table-fixed  outline outline-1">
              <colgroup>
                <col className="w-3/12" />
                <col className="w-9/12" />
              </colgroup>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$[today]</td>
                  <td className="whitespace-normal">It will be replaced by Today with predefined format</td>
                </tr>
                <tr>
                  <td>$[type]</td>
                  <td className="whitespace-normal">It will be replaced by type of file like pdf</td>
                </tr>
                <tr>
                  <td>$[ext]</td>
                  <td className="whitespace-normal">It will be replaced by file extension</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizeSectionHomes
