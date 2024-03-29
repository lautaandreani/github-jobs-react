import { nanoid } from "nanoid";
import { Job } from "./types";

const api = {
  list: async (): Promise<Job[]> => [
    {
      _id: nanoid(),
      company: "Meta",
      position: "Front-End Software Engineer",
      type: "Full time",
      location: "New York",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596263/logo/meta_ese70u_ylrksj.webp",
      contact: "wes@meta.com, eric@meta.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Oculus",
      position: "Front-End Developer React Ssr",
      type: "Full time",
      location: "Berlin or New York",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596272/logo/oculus_nkg83d_cjw5rg.webp",
      contact: "fake@oculus.com, fake2@oculus.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Uber",
      position: "Technology Solutions Developer",
      type: "Part Time",
      location: "New York",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596566/logo/uber_ann8kd_qhvhsa.webp",
      contact: "fake@uber.com, fake2@uber.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Amazon",
      position: "Senior Engineer",
      type: "Full time",
      location: "Amsterdam",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648393430/logo/amazon_flqdrd.svg",
      contact: "fake@amazon.com, fake2@amazon.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Cabify",
      position: "Software engineer (back end)",
      type: "Full time",
      location: "Berlin",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596410/logo/cabify_cvfrq6_xmg42q.webp",
      contact: "fake@cabi.com, fake2@cabi.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Linkedin",
      position: "Senior Python Software Engineer",
      type: "Part Time",
      location: "London",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596409/logo/linkedin_kmwug1_lp0cbm.webp",
      contact: "fake@linkedin.com, fake2@linkedin.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Github",
      position: "Front-End Developer Ssr NodeJs/React",
      type: "Part Time",
      location: "London",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596410/logo/github_sdcgz6_wdbvhw.webp",
      contact: "gitPush@git.com, gitPull@git.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Discord",
      position: "Full Stack Developer React/Electron",
      type: "Full time",
      location: "Berlin",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596410/logo/ds_jl09nd_dap9tw.webp",
      contact: "fake@discord.com, fake2@discord.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Slack",
      position: "Back-End Developer NodeJs/Express",
      type: "Full time",
      location: "Berlin",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596268/logo/slack_aulzpw_skojbg.webp",
      contact: "fake@slack.com, fake2@slack.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Microsoft",
      position: "Senior Python Software Engineer",
      type: "Full time",
      location: "Amsterdam",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596262/logo/Microsoft_logo.svg_bjfksc_x5ctee.webp",
      contact: "fake@microsoft.com, fake2@microsoft.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Ualá",
      position: "Senior Engineer",
      type: "Full time",
      location: "Argentina",
      created_at: Date.now(),
      company_img: null,
      contact: "fake@uala.com, fake2@uala.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Mercado Libre",
      position: "Front-End Developer ReactJs/NextJs",
      type: "Part Time",
      location: "Argentina",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596266/logo/meli_u1c5rm_wuwjkj.webp",
      contact: "fake@meli.com, fake2@meli.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Brubank",
      position: "Front-End Developer React Native Jr",
      type: "Full time",
      location: "Argentina",
      created_at: Date.now(),
      company_img: null,
      contact: "fake@brubank.com, fake2@brubank.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
    {
      _id: nanoid(),
      company: "Netflix",
      position: "Backend Developer Go",
      type: "Full time",
      location: "Amsterdam",
      created_at: Date.now(),
      company_img: "https://res.cloudinary.com/dqp3lvyd0/image/upload/v1648596270/logo/netflix_bjwzgn_nyppl2.webp",
      contact: "fake@netflix.com, fake2@netflix.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus ipsam et consequatur beatae amet? Assumenda voluptatem omnis placeat. Nulla explicabo similique facere tempora culpa. Quis consequuntur ipsa autem distinctio odit facilis, illum molestiae eveniet repudiandae ab quia aliquid tenetur voluptate soluta sapiente tempora quidem quae. Ex porro iusto delectus dolore maiores sapiente perferendis at vitae ipsam reprehenderit repudiandae ad sit consequuntur, iure nam excepturi quos, possimus maxime quo laborum ullam, recusandae animi veniam. Accusamus minima perspiciatis libero illo id repellendus inventore, dolorem ea quaerat voluptas, optio eligendi culpa itaque sed eveniet similique? Expedita minima minus cumque iure beatae tempore consequuntur hic quas aliquid commodi deserunt laudantium praesentium reprehenderit, inventore accusantium, magnam earum culpa aperiam modi explicabo asperiores temporibus fuga unde! Nam, placeat amet? Necessitatibus magnam quis repudiandae earum culpa. Voluptatibus animi aperiam reprehenderit, sequi error voluptate minus expedita, voluptates culpa sit quaerat repudiandae mollitia voluptas a, eveniet nostrum? Quos sequi id saepe. Modi excepturi rerum laboriosam? Incidunt ab est repudiandae eum temporibus reiciendis obcaecati veritatis corporis facilis laborum, explicabo ipsa distinctio fugiat fuga numquam dignissimos in illum dolor minus magni odio, vero pariatur excepturi! Ex fuga quos dolorem possimus molestias eius a, repellat provident perspiciatis excepturi nam soluta voluptatibus.",
    },
  ],
};

export default api;
