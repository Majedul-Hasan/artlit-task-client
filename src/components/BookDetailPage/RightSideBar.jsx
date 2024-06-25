import React from 'react';

const RightSideBar = () => {
  return (
    <div className='w-1/3'>
      <aside>
        <div
          data-test='access-book-desktop'
          className='app-article-access c-book-buy-box'>
          <h2 className='app-article-access__heading'>Access this book</h2>
          <div className='u-ma-16 u-clear-both'>
            <a
              href='//wayf.springernature.com?redirect_uri=https%3A%2F%2Flink.springer.com%2Fbook%2F10.1007%2F978-3-030-88346-1'
              className='u-button u-button--full-width u-button--primary u-justify-content-space-between'
              data-track='click'
              data-track-action='institution access'
              data-track-label='button'>
              <span data-test='access-via-institution'>
                Log in via an institution
              </span>
              <svg
                aria-hidden='true'
                focusable='false'
                width={16}
                height={16}
                className='u-icon'>
                <use xlinkHref='#icon-eds-i-arrow-right-medium' />
              </svg>
            </a>
          </div>
          <div
            className='c-article-buy-box'
            data-test='buy-box-mobile'
            data-container-type='buy-box'
            data-track-component='buy-box'>
            <div
              className='sprcom-buybox-darwin-b buybox '
              id='sprcom-buybox-darwin-b'>
              <div>
                <div className='c-box campaign-prices'>
                  <div className='buying-options'>
                    <div className='buying-option expanded'>
                      <div className='dl buying-option-price-campaign '>
                        <div
                          className='buying-option-price'
                          role='button'
                          tabIndex={0}
                          aria-expanded='true'>
                          <span className='dt'>
                            <svg
                              width={24}
                              height={24}
                              xmlns='http://www.w3.org/2000/svg'
                              aria-hidden='true'
                              focusable='false'>
                              <path
                                d='M11.782 11L9.3 8.518c-.393-.392-.4-1.022-.02-1.403a1.001 1.001 0 011.417 0l4.176 4.177a1.001 1.001 0 010 1.416l-4.176 4.177a.991.991 0 01-1.4.016 1 1 0 01.003-1.42L11.782 13l1.013-.998L11.782 11z'
                                fill='#666'
                                fillRule='evenodd'
                              />
                            </svg>
                            <span>eBook</span>
                          </span>{' '}
                          <span className='dd price-amount'>
                            {' '}
                            EUR&nbsp;42.79{' '}
                          </span>
                          <div className='dd price-info'>
                            <span>
                              {' '}
                              <span className='vat-info'>
                                Price includes VAT (Bangladesh)
                              </span>{' '}
                            </span>
                          </div>
                        </div>
                      </div>
                      <form
                        className='buying-option-form'
                        action='https://order.springer.com/public/cart?discount=false&metricsGroup=NONE&collapsed=false'
                        method='post'>
                        <input
                          type='hidden'
                          name='type'
                          defaultValue='ebook'
                        />{' '}
                        <input
                          type='hidden'
                          name='doi'
                          defaultValue='10.1007/978-3-030-88346-1'
                        />{' '}
                        <input
                          type='hidden'
                          name='isxn'
                          defaultValue='978-3-030-88346-1'
                        />{' '}
                        <input
                          type='hidden'
                          name='contenttitle'
                          defaultValue='Technology Roadmapping and Development'
                        />{' '}
                        <input
                          type='hidden'
                          name='mac'
                          defaultValue='8759efda1567d7cee5242528b4cc0b68'
                        />
                        <ul className='buying-option-usps'>
                          <li>Available as EPUB and PDF</li>
                          <li>Read on any device</li>
                          <li>Instant download</li>
                          <li>Own it forever</li>
                        </ul>
                        <button
                          type='submit'
                          className='u-button u-button--full-width u-button--primary u-button--xsmall'
                          value='Submit'
                          data-track='click'
                          data-track-prefer='click'
                          data-track-label='buy ebook'
                          onclick='dataLayer.push({"event":"addToCart","ecommerce":{"currencyCode":"EUR","add":{"products":[{"name":"Technology Roadmapping and Development","id":"978-3-030-88346-1","price":39.99,"brand":"Springer International Publishing","category":"Industrial Management","variant":"ebo","quantity":1}]}}});'>
                          Buy eBook
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            width={16}
                            height={16}
                            className='u-icon'>
                            <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                          </svg>
                        </button>
                      </form>
                    </div>
                    <div className='buying-option'>
                      <div className='dl buying-option-price-campaign '>
                        <div
                          className='buying-option-price'
                          role='button'
                          tabIndex={0}
                          aria-expanded='false'>
                          <span className='dt'>
                            <svg
                              width={24}
                              height={24}
                              xmlns='http://www.w3.org/2000/svg'
                              aria-hidden='true'
                              focusable='false'>
                              <path
                                d='M11.782 11L9.3 8.518c-.393-.392-.4-1.022-.02-1.403a1.001 1.001 0 011.417 0l4.176 4.177a1.001 1.001 0 010 1.416l-4.176 4.177a.991.991 0 01-1.4.016 1 1 0 01.003-1.42L11.782 13l1.013-.998L11.782 11z'
                                fill='#666'
                                fillRule='evenodd'
                              />
                            </svg>
                            <span>Softcover Book</span>
                          </span>{' '}
                          <span className='dd price-amount'>
                            {' '}
                            EUR&nbsp;49.99{' '}
                          </span>
                          <div
                            className='dd price-info'
                            hidden>
                            <span>
                              {' '}
                              <span className='vat-info'>
                                Price excludes VAT (Bangladesh)
                              </span>{' '}
                            </span>
                          </div>
                        </div>
                      </div>
                      <form
                        className='buying-option-form'
                        action='https://order.springer.com/public/cart?discount=false&metricsGroup=NONE&collapsed=false'
                        method='post'
                        hidden>
                        <input
                          type='hidden'
                          name='type'
                          defaultValue='book'
                        />{' '}
                        <input
                          type='hidden'
                          name='doi'
                          defaultValue='10.1007/978-3-030-88346-1'
                        />{' '}
                        <input
                          type='hidden'
                          name='isxn'
                          defaultValue='978-3-030-88348-5'
                        />{' '}
                        <input
                          type='hidden'
                          name='contenttitle'
                          defaultValue='Technology Roadmapping and Development'
                        />{' '}
                        <input
                          type='hidden'
                          name='mac'
                          defaultValue='8402b4e3eb3d8c04c67e12e5b3ff1861'
                        />
                        <ul className='buying-option-usps'>
                          <li>Compact, lightweight edition</li>
                          <li>Dispatched in 3 to 5 business days</li>
                          <li>
                            Free shipping worldwide -{' '}
                            <a
                              href='https://support.springernature.com/en/support/solutions/articles/6000233448-coronavirus-disease-covid-19-delivery-information'
                              target='_blank'>
                              see info
                            </a>
                          </li>
                        </ul>
                        <button
                          type='submit'
                          className='u-button u-button--full-width u-button--primary u-button--xsmall'
                          value='Submit'
                          data-track='click'
                          data-track-prefer='click'
                          data-track-label='buy softcover'
                          onclick='dataLayer.push({"event":"addToCart","ecommerce":{"currencyCode":"EUR","add":{"products":[{"name":"Technology Roadmapping and Development","id":"978-3-030-88348-5","price":49.99,"brand":"Springer International Publishing","category":"Industrial Management","variant":"print","quantity":1}]}}});'>
                          Buy Softcover Book
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            width={16}
                            height={16}
                            className='u-icon'>
                            <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                          </svg>
                        </button>
                      </form>
                    </div>
                    <div className='buying-option'>
                      <div className='dl buying-option-price-campaign '>
                        <div
                          className='buying-option-price'
                          role='button'
                          tabIndex={0}
                          aria-expanded='false'>
                          <span className='dt'>
                            <svg
                              width={24}
                              height={24}
                              xmlns='http://www.w3.org/2000/svg'
                              aria-hidden='true'
                              focusable='false'>
                              <path
                                d='M11.782 11L9.3 8.518c-.393-.392-.4-1.022-.02-1.403a1.001 1.001 0 011.417 0l4.176 4.177a1.001 1.001 0 010 1.416l-4.176 4.177a.991.991 0 01-1.4.016 1 1 0 01.003-1.42L11.782 13l1.013-.998L11.782 11z'
                                fill='#666'
                                fillRule='evenodd'
                              />
                            </svg>
                            <span>Hardcover Book</span>
                          </span>{' '}
                          <span className='dd price-amount'>
                            {' '}
                            EUR&nbsp;69.99{' '}
                          </span>
                          <div
                            className='dd price-info'
                            hidden>
                            <span>
                              {' '}
                              <span className='vat-info'>
                                Price excludes VAT (Bangladesh)
                              </span>{' '}
                            </span>
                          </div>
                        </div>
                      </div>
                      <form
                        className='buying-option-form'
                        action='https://order.springer.com/public/cart?discount=false&metricsGroup=NONE&collapsed=false'
                        method='post'
                        hidden>
                        <input
                          type='hidden'
                          name='type'
                          defaultValue='book'
                        />{' '}
                        <input
                          type='hidden'
                          name='doi'
                          defaultValue='10.1007/978-3-030-88346-1'
                        />{' '}
                        <input
                          type='hidden'
                          name='isxn'
                          defaultValue='978-3-030-88345-4'
                        />{' '}
                        <input
                          type='hidden'
                          name='contenttitle'
                          defaultValue='Technology Roadmapping and Development'
                        />{' '}
                        <input
                          type='hidden'
                          name='mac'
                          defaultValue='69260e2c4ab2c7a6db41c406753e2a29'
                        />
                        <ul className='buying-option-usps'>
                          <li>Durable hardcover edition</li>
                          <li>Dispatched in 3 to 5 business days</li>
                          <li>
                            Free shipping worldwide -{' '}
                            <a
                              href='https://support.springernature.com/en/support/solutions/articles/6000233448-coronavirus-disease-covid-19-delivery-information'
                              target='_blank'>
                              see info
                            </a>
                          </li>
                        </ul>
                        <button
                          type='submit'
                          className='u-button u-button--full-width u-button--primary u-button--xsmall'
                          value='Submit'
                          data-track='click'
                          data-track-prefer='click'
                          data-track-label='buy hardcover'
                          onclick='dataLayer.push({"event":"addToCart","ecommerce":{"currencyCode":"EUR","add":{"products":[{"name":"Technology Roadmapping and Development","id":"978-3-030-88345-4","price":69.99,"brand":"Springer International Publishing","category":"Industrial Management","variant":"print","quantity":1}]}}});'>
                          Buy Hardcover Book
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            width={16}
                            height={16}
                            className='u-icon'>
                            <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='buybox-tax-info'>
                  <p className='tax-info'>
                    Tax calculation will be finalised at checkout
                  </p>
                </div>
                <div
                  className='access-options'
                  style={{ display: 'none' }}>
                  <div className='access-option'>
                    <a href='https://single-ebooks.springernature.com/search?query=10.1007%2F978-3-030-88346-1'>
                      {' '}
                      <span>Licence this eBook for your library </span>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        width={24}
                        height={24}
                        className='u-icon'>
                        <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                      </svg>
                    </a>
                  </div>
                  <div className='access-option'>
                    <a href='https://www.springernature.com/gp/librarians/licensing/agc/ebooks'>
                      {' '}
                      <span>Learn about institutional subscriptions </span>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        width={24}
                        height={24}
                        className='u-icon'>
                        <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n        .sprcom-buybox-darwin-b > div {\n            flex-grow: 1;\n            width: 100%;\n        }\n\n        .sprcom-buybox-darwin-b .buying-options {\n            display: flex;\n            flex-wrap: wrap;\n            margin-top: 0;\n        }\n\n        .sprcom-buybox-darwin-b .buying-options > * {\n            background-color: #F0F7FC;\n            flex-grow: 1;\n            flex-basis: auto;\n            width: 360px;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            border-bottom: 1px solid #cedbe0;\n            border-top: 1px solid #cedbe0;\n            margin-top: -1px;\n        }\n\n        .sprcom-buybox-darwin-b .dt {\n            align-items: center;\n            display: flex;\n            font-weight: 700;\n            margin-left: -10px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-form {\n            padding: 0 16px 16px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-form button {\n            gap: 8px;\n            margin: 20px 0px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price {\n            align-items: center;\n            display: flex;\n            flex-wrap: wrap;\n            font-size: 1rem;\n            line-height: 1.4;\n            user-select: none;\n            cursor: pointer;\n            padding: 24px;\n            margin: 0;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price:focus {\n            outline: 4px solid #08c;\n            position: relative;\n            z-index: 1;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .dt, .sprcom-buybox-darwin-b .buying-option-price .dt svg path {\n            color: #025e8d;\n            fill: #025e8d;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .dt, .sprcom-buybox-darwin-b .buying-option-price .dd {\n            flex-grow: 1;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .dt svg {\n            height: auto;\n            min-width: 24px;\n            margin-right: 12px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .price-info {\n            color: #555;\n            font-size: .875rem;\n            text-align: right;\n            width: 100%;\n            line-height: 1.6;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .price-amount {\n            color: #555;\n            text-align: right;\n            font-weight: 600;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .price-type {\n            font-size: 40%;\n            margin-left: 8px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .price-discount {\n            width: 100%;\n            display: inline-block;\n            font-size: 14px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-price .discount-info {\n            display: inline-block;\n            width: 100%;\n            color: #be1818;\n        }\n\n        .sprcom-buybox-darwin-b .expanded .discounted .price-amount {\n            color: #be1818;\n        }\n\n        .sprcom-buybox-darwin-b .expanded .discounted .price-amount .price-discount {\n            color: #555;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-usps {\n            color: #555;\n            font-size: 1rem;\n            line-height: 1.6;\n            margin: 0;\n            padding-left: 0;\n            list-style: none;\n            padding-top: 16px;\n            border-top: 1px solid #f0f0f0;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-usps > li {\n            position: relative;\n            padding-left: 26px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-usps > li::before {\n            position: absolute;\n            content: \"\";\n            left: 0;\n            top: calc(0.8em - 5px);\n            background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='%230070A8'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/svg%3E\");\n            width: 10px;\n            height: 10px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-option-usps > li:not(:first-child) {\n            margin-top: 4px;\n        }\n\n        .sprcom-buybox-darwin-b .buying-options > .expanded {\n            background-color: #fff;\n        }\n\n        .sprcom-buybox-darwin-b dl {\n\n        }\n\n        .sprcom-buybox-darwin-b a:visited {\n            color: #004b83;\n        }\n\n        .sprcom-buybox-darwin-b [aria-expanded=false] svg {\n            transform: rotate(90deg) scale(1.5);\n        }\n\n        .sprcom-buybox-darwin-b [aria-expanded=true] svg {\n            transform: rotate(270deg) scale(1.5);\n        }\n\n        .sprcom-buybox-darwin-b dt {\n            align-items: center;\n            display: flex;\n        }\n\n        .sprcom-buybox-darwin-b style {\n            display: none;\n        }\n\n        .sprcom-buybox-darwin-b .buybox-tax-info {\n            text-align: center;\n            padding: 16px;\n        }\n\n        .sprcom-buybox-darwin-b .tax-info,\n        .sprcom-buybox-darwin-b .buybox-additional-info {\n            font-size: .875rem;\n        }\n\n        .sprcom-buybox-darwin-b .buybox-additional-info {\n            font-weight: 600;\n        }\n\n        .sprcom-buybox-darwin-b .access-option {\n            border-top: 1px solid #cedbe0;\n            padding: 16px;\n            font-size: 1rem;\n        }\n\n        .sprcom-buybox-darwin-b .access-option svg {\n            vertical-align: middle;\n        }\n\n        .sprcom-buybox-darwin-b .access-option a {\n            color: #222;\n        }\n\n        .sprcom-buybox-darwin-b .u-button--primary.u-button--xsmall {\n            font-size: .875rem;\n            padding: 2px 8px;\n        }\n    ",
                }}
              />
              <div data-id='id_1719351521314' />
            </div>
          </div>
          <h2 className='app-article-access__heading app-article-access__heading--top-border'>
            Other ways to access
          </h2>
          <div className='app-article-access__subscriptions'>
            <p className='u-mb-8'>
              <a href='https://single-ebooks.springernature.com/search?query=10.1007/978-3-030-88346-1'>
                Licence this eBook for your library
                <svg
                  aria-hidden='true'
                  focusable='false'
                  width={24}
                  height={24}
                  className='u-icon'>
                  <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                </svg>
              </a>
            </p>
            <p>
              <a href='https://www.springernature.com/gp/librarians/licensing/agc/ebooks'>
                Institutional subscriptions
                <svg
                  aria-hidden='true'
                  focusable='false'
                  width={24}
                  height={24}
                  className='u-icon'>
                  <use xlinkHref='#icon-eds-i-arrow-right-medium' />
                </svg>
              </a>
            </p>
          </div>
        </div>
        <div className='c-reading-companion'>
          <div
            className='c-reading-companion__sticky'
            data-component='reading-companion-sticky'
            data-test='reading-companion-sticky'
            style={{ top: 32 }}>
            <h3 className='c-reading-companion__heading u-font-family-sans'>
              Sections
            </h3>
            <div
              className='c-reading-companion__panel c-reading-companion__sections c-reading-companion__panel--active'
              id='tabpanel-sections'
              aria-labelledby='tab-sections'
              role='tabpanel'>
              <div
                className='c-reading-companion__scroll-pane'
                style={{ maxHeight: '320.109px' }}>
                <ul className='c-reading-companion__sections-list'>
                  <li
                    id='rc-sec-overview'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#overview'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:Overview'>
                      Overview
                    </a>
                  </li>
                  <li
                    id='rc-sec-about-this-book'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#about-this-book'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:About this book'>
                      About this book
                    </a>
                  </li>
                  <li
                    id='rc-sec-keywords'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#keywords'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:Keywords'>
                      Keywords
                    </a>
                  </li>
                  <li
                    id='rc-sec-toc'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#toc'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:Table of contents 22 chapters'>
                      Table of contents (22 chapters)
                    </a>
                  </li>
                  <li
                    id='rc-sec-affiliations'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#affiliations'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:Authors and Affiliations'>
                      Authors and Affiliations
                    </a>
                  </li>
                  <li
                    id='rc-sec-about-authors'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#about-authors'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:About the author'>
                      About the author
                    </a>
                  </li>
                  <li
                    id='rc-sec-bibliographic-information'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#bibliographic-information'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:Bibliographic Information'>
                      Bibliographic Information
                    </a>
                  </li>
                  <li
                    id='rc-sec-publish-with-us'
                    className='c-reading-companion__section-item'>
                    <a
                      href='#publish-with-us'
                      data-track='click'
                      data-track-action='section anchor'
                      data-track-label='link:Publish with us'>
                      Publish with us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSideBar;
