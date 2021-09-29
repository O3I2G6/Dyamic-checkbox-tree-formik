import React from "react";
import "./styles.css";
import { Formik, FieldArray } from "formik";

const categories = [
  {
    id: "Sun Jun 27 2021",
    arr: [
      { id: "music0", name: "Music 0", date: "Sun Jun 27 2021" },
      { id: "video0", name: "Video 0", date: "Sun Jun 27 2021" },
      { id: "photos0", name: "Photos 0", date: "Sun Jun 27 2021" }
    ]
  },

  {
    id: "Sun Jun 28 2021",
    arr: [
      { id: "music1", name: "Music 1", date: "Sun Jun 28 2021" },
      { id: "video1", name: "Video 1", date: "Sun Jun 28 2021" },
      { id: "photos1", name: "Photos 1", date: "Sun Jun 28 2021" }
    ]
  },

  {
    id: "Sun Jun 29 2021",
    arr: [
      { id: "music2", name: "Music 2", date: "Sun Jun 29 2021" },
      { id: "video2", name: "Video 2", date: "Sun Jun 29 2021" },
      { id: "photos2", name: "Photos 2", date: "Sun Jun 29 2021" }
    ]
  }
];

export const FormExample = () => (
  <Formik initialValues={{ categorylist: [] }}>
    {({ values, setFieldValue }) => {
      console.log(values);

      return (
        <div className="hahaha">
          <FieldArray name="categorylist">
            {(arrayHelpers) => {
              return (
                <div className="huhuhu">
                  {categories.map((categoryRow, index) => {
                    const arr = values.categorylist.filter(
                      (category) => category.date === categoryRow.id
                    );

                    return (
                      <div key={index} className="hihihi">
                        <label className="myinput">
                          {" "}
                          {categoryRow.id}
                          <input
                            name={"categoryRow" + categoryRow.id}
                            type="checkbox"
                            value={index}
                            checked={arr.length === categoryRow.arr.length}
                            onChange={(e) => {
                              e.checked = true;
                              if (e.target.checked) {
                                for (const key in categoryRow.arr) {
                                  if (categoryRow.arr.hasOwnProperty(key)) {
                                    const element = categoryRow.arr[key];
                                    arrayHelpers.push(element);
                                  }
                                }
                              } else {
                                for (const key in categoryRow.arr) {
                                  if (categoryRow.arr.hasOwnProperty(key)) {
                                    const element = categoryRow.arr[key];
                                    const idx = values.categorylist.findIndex(
                                      (category) => category.id === element.date
                                    );
                                    arrayHelpers.remove(idx);
                                  }
                                }
                              }
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>

                        <FieldArray name="categorylist">
                          {(arrayHelpers) => {
                            return (
                              <div className="ahuhu">
                                {categoryRow.arr.map((cateItem) => {
                                  return (
                                    <label
                                      key={cateItem.id}
                                      className="myinput"
                                    >
                                      {" "}
                                      {cateItem.name}
                                      <input
                                        name="categoryItems"
                                        type="checkbox"
                                        value={cateItem.id}
                                        checked={
                                          values.categorylist?.findIndex(
                                            (category) =>
                                              category.id === cateItem.id
                                          ) !== -1
                                        }
                                        onChange={(e) => {
                                          if (e.target.checked)
                                            arrayHelpers.push(cateItem);
                                          else {
                                            const idx = values.categorylist.findIndex(
                                              (category) =>
                                                category.id === cateItem.id
                                            );
                                            arrayHelpers.remove(idx);
                                          }
                                        }}
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                  );
                                })}
                              </div>
                            );
                          }}
                        </FieldArray>
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>
      );
    }}
  </Formik>
);

export default function App() {
  return (
    <div className="App">
      <FormExample />
    </div>
  );
}
