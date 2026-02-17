import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

export interface Subject extends BaseRecord {
  id: number;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

const mockSubjects: Subject[] = [
  {
    id: 1,
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Foundational course covering basic programming concepts, algorithms, and problem-solving techniques.",
  },
  {
    id: 2,
    courseCode: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Covers vectors, matrices, linear transformations, and systems of linear equations with applications.",
  },
  {
    id: 3,
    courseCode: "HIST210",
    name: "World History Since 1900",
    department: "History",
    description:
      "Explores major political, social, and economic developments around the world from 1900 to the present.",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>(
    { resource }: GetListParams
  ): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => { throw new Error("This Function is not present in mock"); },
  create: async () => { throw new Error("This Function is not present in mock"); },
  update: async () => { throw new Error("This Function is not present in mock"); },
  deleteOne: async () => { throw new Error("This Function is not present in mock"); },
  getApiUrl: () => "",
};