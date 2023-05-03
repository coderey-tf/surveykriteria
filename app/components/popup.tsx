import Image from "next/image";

export default function Popup() {
  return (
    <div className="">
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-3"
        className="btn btn-sm btn-circle bg-primary border-none  fixed inset-y-72 right-0 translate-x-3 transition-all duration-500 ease-in-out hover:-translate-x-1 "
      >
        ?
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-black/50 backdrop-blur-sm">
        <div className="modal-box relative bg-primary">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Petunjuk Skala Kuesioner</h3>
          <Image
            src="/tutor.png"
            alt="petunjuk"
            width={800}
            height={200}
            className="mx-auto mt-5"
            placeholder="blur"
            blurDataURL={"/tutor.png"}
          />
          <div className="mt-5 text-primary">
            <p>NB :</p>
            <p>= : equally importance</p>
            <p>3 & 3&apos; : moderately importance</p>
            <p>5 & 5&apos; : strongly importance</p>
            <p>7 & 7&apos; : very strongly importance</p>
            <p>9 & 9&apos; : extremely importance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
