import CustomContainer from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "Clients",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Employees",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
];

const Reviews = () => {
  return (
    <div className="pb-10">
      <CustomContainer>
        <>
          <Title text="Reviews" />
          <div className="">
            <div className="">
              <TabGroup>
                <TabList className="flex justify-center gap-x-10 ">
                  {categories.map(({ name }) => (
                    <Tab
                      key={name}
                      className="data-[selected]:text-primary data-[selected]:underline"
                    >
                      {name}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className="mt-3">
                  {categories.map(({ name, posts }) => (
                    <TabPanel key={name} className="">
                      <ul>
                        {posts.map((post) => (
                          <li key={post.id} className="relative transition">
                            <a href="#" className="">
                              <span className="absolute inset-0" />
                              {post.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </>
      </CustomContainer>
    </div>
  );
};

export default Reviews;
