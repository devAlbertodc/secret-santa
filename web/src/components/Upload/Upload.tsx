import Icon from '../Icon/Icon'

const Upload = () => {
  return (
    <div className="flex h-[100px] w-full items-center border-[6px] border-dashed border-white px-8">
      <label
        htmlFor="upload"
        className="flex flex-1 items-center text-3xl text-white"
      >
        Avatar
        <input
          className="hidden"
          type="file"
          name="upload"
          id="upload"
          accept="image/png, image.jpeg"
        />
        <div className="flex-1 text-center font-sans text-lg normal-case tracking-normal text-[#CAE3D7]">
          Drag and drop an image
        </div>
      </label>

      <div className="text-white">
        <Icon id="upload" size={32}></Icon>
      </div>
    </div>
  )
}

export default Upload
