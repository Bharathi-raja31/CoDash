

// export const itemMainList = ["Item A", "Item B", "Item C"];
export const serachSelectedItem = ["Item A1", "Item A2", "Item A3", "Item A4"];
// export const listItemTagList = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"];
// export const filterItem = ["item A1", "item A2", "item A3", "item A4", "item A5", "item A6", "item A7", "item A8", "item A9"];

// Prople Picture
const avatar1 = require('../assets/img/content/avatar1.jpg');
const avatar2 = require('../assets/img/content/avatar2.jpg');
const avatar3 = require('../assets/img/content/avatar3.jpg');

// Listing Logo
const research = require('../assets/img/content/research.svg');

// Actions
const actionEdit = require('../assets/img/action/edit.svg');
const actionLocked = require('../assets/img/action/lock1.svg');
const actionPending = require('../assets/img/action/lock2.svg');
const actionDisabled = require('../assets/img/action/lock3.svg');

export const status = {
    edit: actionEdit,
    locked: actionLocked,
    pending: actionPending,
    disabled: actionDisabled
}

// Item Main List with Count
export const itemMainList = [
    {
        name: "Item A",
        count: 150,
    },
    {
        name: "Item B",
        count: 16,
    },
    {
        name: "Item C",
        count: 18,
    }
]

// Item Main List with Count
export const filterItem = [
    {
        name: "Item A1",
        count: 26,
    },
    {
        name: "Item A2",
        count: 28,
    },
    {
        name: "Item A3",
        count: 40,
    },
    {
        name: "Item A4",
        count: 40,
    },
    {
        name: "Item A5",
        count: 40,
    },
    {
        name: "Item A6",
        count: 54,
    },
    {
        name: "Item A7",
        count: 98,
    },
    {
        name: "Item A8",
        count: 28,
    },
    {
        name: "Item A9",
        count: 40,
    },
    {
        name: "Item A10",
        count: 52,
    },
    {
        name: "Item A11",
        count: 23,
    },
    {
        name: "Item A12",
        count: 12,
    },
    {
        name: "Item A13",
        count: 14,
    },
    {
        name: "Item A14",
        count: 48,
    },
    {
        name: "Item A15",
        count: 98,
    },
    {
        name: "Item A16",
        count: 67,
    },
    {
        name: "Item A17",
        count: 76,
    }
]

// Listing Mock Data
export const listItemData = [
    {
        listingType: research,
        title: "Item Title",
        subtitle: "ABCD",
        views: 587,
        status: "edit",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
        tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8", "Tag9", "Tag10"],
        people: [avatar1, avatar2, avatar3, avatar3, avatar3, avatar3, avatar3, avatar3, avatar3, avatar3],
        score: 74,
        chartColor: "rgba(178, 215, 173, 1)",
        textColor: "#b2d7ad",
    },
    {
        listingType: research,
        title: "Item Title",
        subtitle: "ABCD",
        views: 697,
        status: "locked",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
        tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8", "Tag5", "Tag6", "Tag7", "Tag8"],
        people: [avatar1, avatar2, avatar3, avatar3, avatar3, avatar3],
        score: 51,
        chartColor: "rgba(255, 158, 77, 1)",
        textColor: "#ff9e4d",
    },
    {
        listingType: research,
        title: "Item Title",
        subtitle: "ABCD",
        views: 324,
        status: "pending",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
        tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8", "Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"],
        people: [avatar1, avatar2, avatar3, avatar1, avatar2, avatar3, avatar1, avatar2, avatar3],
        score: 19,
        chartColor: "rgba(249, 160, 153, 1)",
        textColor: "#f9a099",
    },
    {
        listingType: research,
        title: "Item Title",
        subtitle: "ABCD",
        views: 985,
        status: "disabled",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
        tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"],
        people: [avatar1, avatar2, avatar3, avatar1, avatar2, avatar2, avatar3, avatar1, avatar2, avatar3],
        score: 74,
        chartColor: "rgba(178, 215, 173, 1)",
        textColor: "#b2d7ad",
    }
]
