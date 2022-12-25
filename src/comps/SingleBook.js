import React from 'react'

function SingleBook({ item, index }) {
          const { volumeInfo } = item;
          const { title, imageLinks, readingModes, pageCount } = volumeInfo

          return (
                    <div key={index} className="single-item single-book">
                              <a href={`https://books.google.com.pk/books?id=${item.id}`}>
                                        <img src={readingModes.image && imageLinks.thumbnail} alt="Image not avalable" />
                              </a>
                              <div>
                                        <span className='count-container'>
                                                  <span>Pages</span><br />
                                                  <span>{pageCount}</span>
                                        </span>
                                        <a href={`https://books.google.com.pk/books?id=${item.id}`}>

                                        <h4>{title.length > 25 ? `${title.substring(0, 24)}...` : title}</h4>
                                        </a>
                              </div>
                    </div>
          )
}

export default SingleBook