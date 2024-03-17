import { useState } from "react";
// import { OpenAI } from "openai";
import { NavbarNoHome } from "../component/navbar";

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_APP_CHAVE,
//   dangerouslyAllowBrowser: true,
// });

const Chat = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // const assistant = openai.beta.assistants.create({
  //   name: "Math Tutor",
  //   instructions:
  //     "You are a personal math tutor. Write and run code to answer math questions.",
  //   tools: [{ type: "code_interpreter" }],
  //   model: "gpt-4-turbo-preview",
  // });

  const handleMessageSend = () => {
    const updateMessage: string[] = [...message, inputValue];
    setMessage(updateMessage);
    setInputValue("");
  };

  return (
    <>
      <NavbarNoHome />
      <div className="w-screen mx-auto max-w-[1200px] px-9">
        <h2 className="leading-[30px] text-[#505050] text-[20px] mb-[30px] mt-[40px]">
          Converse com a flora <span className="text-[#00BB71]">AI</span>
        </h2>
        <div className="shadow-chat max-w-[1200px] px-9 h-[522px] rounded-[22px] relative pt-[50px]">
          <Icon />
          <div className="max-h-[350px] h-[350px] overflow-y-auto flex-col flex gap-5">
            <ReceivedChat />
            {message.map((mess, index) => (
              <SendedChat key={index} message={mess} />
            ))}
          </div>

          <form
            className="w-full flex items-center gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleMessageSend();
            }}
          >
            <input
              name="messageInput"
              value={inputValue}
              onChange={handleChange}
              placeholder="Faça uma pergunta sobre alguma cultura"
              className=" placeholder:text-[#9ca3af] text-[#374151] w-full rounded-full py-4 outline-none bg-[#E5E7EB] px-7"
            />

            <div className="w-[47px] h-[47px] rounded-full bg-[#EBFAF4] hover:cursor-pointer">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="47" height="47" rx="23.5" fill="#EBFAF4" />
                <path
                  d="M23 13C20.892 13 19.1818 14.6797 19.1818 16.75V23C19.1818 25.0703 20.892 26.75 23 26.75C25.108 26.75 26.8182 25.0703 26.8182 23V16.75C26.8182 14.6797 25.108 13 23 13ZM17.9091 21.4375C17.9091 20.918 17.4835 20.5 16.9545 20.5C16.4256 20.5 16 20.918 16 21.4375V23C16 26.4805 18.633 29.3555 22.0455 29.8125V31.125H20.1364C19.6074 31.125 19.1818 31.543 19.1818 32.0625C19.1818 32.582 19.6074 33 20.1364 33H23H25.8636C26.3926 33 26.8182 32.582 26.8182 32.0625C26.8182 31.543 26.3926 31.125 25.8636 31.125H23.9545V29.8125C27.367 29.3555 30 26.4805 30 23V21.4375C30 20.918 29.5744 20.5 29.0455 20.5C28.5165 20.5 28.0909 20.918 28.0909 21.4375V23C28.0909 25.7617 25.8119 28 23 28C20.1881 28 17.9091 25.7617 17.9091 23V21.4375Z"
                  fill="#00BB71"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="w-[47px] h-[47px] rounded-full bg-[#EBFAF4] hover:cursor-pointer"
            >
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.08"
                  width="47"
                  height="47"
                  rx="23.5"
                  fill="#00BB71"
                />
                <path
                  d="M35 23.5L14 34V24.5L23 23.5L14 22.5V13L35 23.5Z"
                  fill="#00BB71"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;

const ReceivedChat = () => {
  return (
    <div className="max-w-[828px] h-auto bg-[#e9eaec] rounded-[16px] p-5 self-start">
      <p className="text-sm text-[#374151] font-normal leading-[21px]">
        Oi! Aqui é a Flora AI, pronta para ajudar na sua jornada agrícola! Posso
        fornecer informações sobre culturas, previsões de clima, manejo de
        pragas e muito mais. Se precisar de conselhos ou dicas
        rápidas, é só me chamar!
      </p>
    </div>
  );
};
const SendedChat = ({ message }: { message: string }) => {
  return message ? (
    <div className="max-w-[828px] h-auto bg-[#00BB71] rounded-[16px] p-5 self-end">
      <p className="text-sm text-white font-normal leading-[21px]">{message}</p>
    </div>
  ) : null;
};

const Icon = () => {
  return (
    <div className="absolute right-5 top-3">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14ZM5.90625 9.1875H6.5625V7.4375H5.90625C5.54258 7.4375 5.25 7.14492 5.25 6.78125C5.25 6.41758 5.54258 6.125 5.90625 6.125H7.21875C7.58242 6.125 7.875 6.41758 7.875 6.78125V9.1875H8.09375C8.45742 9.1875 8.75 9.48008 8.75 9.84375C8.75 10.2074 8.45742 10.5 8.09375 10.5H5.90625C5.54258 10.5 5.25 10.2074 5.25 9.84375C5.25 9.48008 5.54258 9.1875 5.90625 9.1875ZM7 3.5C7.23206 3.5 7.45462 3.59219 7.61872 3.75628C7.78281 3.92038 7.875 4.14294 7.875 4.375C7.875 4.60706 7.78281 4.82962 7.61872 4.99372C7.45462 5.15781 7.23206 5.25 7 5.25C6.76794 5.25 6.54538 5.15781 6.38128 4.99372C6.21719 4.82962 6.125 4.60706 6.125 4.375C6.125 4.14294 6.21719 3.92038 6.38128 3.75628C6.54538 3.59219 6.76794 3.5 7 3.5Z"
          fill="#00BB71"
        />
      </svg>
    </div>
  );
};
