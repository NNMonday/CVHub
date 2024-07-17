import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLayerGroup,
    faLocationDot,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Info from '../components/Info';
import SingleCompanyJob from '../components/SingleCompanyJob';

function SingleCompany() {
    const { companyId } = useParams();

    // Fetch company details using the companyId if needed

    return (
        <MainLayout>
            <div style={{ padding: "10px 200px" }} className="bg-secondary-subtle">
                <div className="d-flex">
                    <p className="fw-bold">Find Job</p>
                </div>
            </div>
            <div style={{ padding: "0px 200px", borderRadius: "0px 0px 8px 8px", border: "border: 1px solid var(--Gray-100, #E4E5E8);" }}>
                <img alt='banner' src='/banner.png' style={{ width: '100%' }} />
            </div>

            <div className='container content' style={{ position: 'relative', top: '-100px', zIndex: '1' }}>
                <div className='d-flex justify-content-between align-items-center bg-white' style={{ padding: "40px", width: "1320px", }}>
                    {/* Your content here */}
                    <div className='d-flex gap-2'>
                        <img alt='icon' src='/instagram.png' />
                        <div className='d-flex flex-column justify-content-around'>
                            <div style={{ fontSize: "24px" }} className='fw-bold'>Twiter</div>
                            <div className='text-secondary'>Information technology</div>
                        </div>
                    </div>

                    <button className='btn btn-primary fw-medium' style={{ padding: "16px 32px", borderRadius: "4px", fontSize: "16px" }}>Open view position <i class="bi bi-arrow-right"></i></button>
                </div>


            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <div
                            style={{
                                flex: "1",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "36px",
                                minWidth: "471px",
                                maxWidth: "100%",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    gap: "16px",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0",
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "inherit",
                                        lineHeight: "32px",
                                        fontWeight: "500",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Description
                                </h3>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        color: "#5e6670",
                                    }}
                                >
                                    Fusce et erat at nibh maximus fermentum. Mauris ac justo nibh.
                                    Praesent nec lorem lorem. Donec ullamcorper lacus mollis tortor
                                    pretium malesuada. In quis porta nisi, quis fringilla orci.
                                    Donec porttitor, odio a efficitur blandit, orci nisl porta elit,
                                    eget vulputate quam nibh ut tellus. Sed ut posuere risus, vitae
                                    commodo velit. Nullam in lorem dolor. Class aptent taciti
                                    sociosqu ad litora torquent per conubia nostra, per inceptos
                                    himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia curae; Nulla tincidunt ac quam quis
                                    vehicula. Quisque sagittis ullamcorper magna. Vivamus elementum
                                    eu leo et gravida. Sed dignissim placerat diam, ac laoreet eros
                                    rutrum sit amet. Donec imperdiet in leo et imperdiet. In hac
                                    habitasse platea dictumst. Sed quis nisl molestie diam
                                    ullamcorper condimentum. Sed aliquet, arcu eget pretium
                                    bibendum, odio enim rutrum arcu, quis suscipit mauris turpis in
                                    neque. Vestibulum id vestibulum odio. Sed dolor felis, iaculis
                                    eget turpis eu, lobortis imperdiet massa.
                                </div>
                            </div>
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    gap: "16px",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0",
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "inherit",
                                        lineHeight: "32px",
                                        fontWeight: "500",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Company Benefits
                                </h3>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "12px",
                                        fontSize: "16px",
                                        color: "#5e6670",
                                    }}
                                >
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        Donec dignissim nunc eu tellus malesuada fermentum. Sed
                                        blandit in magna at accumsan. Etiam imperdiet massa aliquam,
                                        consectetur leo in, auctor neque.
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        <ul
                                            style={{
                                                margin: "0",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                paddingLeft: "21px",
                                            }}
                                        >
                                            <li>In hac habitasse platea dictumst.</li>
                                        </ul>
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        <ul
                                            style={{
                                                margin: "0",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                paddingLeft: "21px",
                                            }}
                                        >
                                            <li>
                                                Sed aliquet, arcu eget pretium bibendum, odio enim rutrum
                                                arcu.
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        <ul
                                            style={{
                                                margin: "0",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                paddingLeft: "21px",
                                            }}
                                        >
                                            <li>{`Vestibulum id vestibulum odio. `}</li>
                                        </ul>
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        <ul
                                            style={{
                                                margin: "0",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                paddingLeft: "21px",
                                            }}
                                        >
                                            <li>{`Etiam libero ante accumsan id tellus venenatis rhoncus vulputate velit. `}</li>
                                        </ul>
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        <ul
                                            style={{
                                                margin: "0",
                                                fontFamily: "inherit",
                                                fontSize: "inherit",
                                                paddingLeft: "21px",
                                            }}
                                        >
                                            <li>Nam condimentum sit amet ipsum id malesuada.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    gap: "16px",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0",
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "inherit",
                                        lineHeight: "32px",
                                        fontWeight: "500",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Company Vision
                                </h3>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        color: "#5e6670",
                                    }}
                                >{`Praesent ultrices mauris at nisi euismod, ut venenatis augue blandit. Etiam massa risus, accumsan nec tempus nec, venenatis in nisl. Maecenas nulla ex, blandit in magna id, pellentesque facilisis sapien. In feugiat auctor mi, eget commodo lectus convallis ac. `}</div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "20px",
                                    maxWidth: "100%",
                                    fontSize: "14px",
                                    color: "#474c54",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        lineHeight: "20px",
                                        display: "inline-block",
                                        minWidth: "88px",
                                    }}
                                >
                                    Share profile:
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "8px",
                                        maxWidth: "100%",
                                    }}
                                >
                                    <button
                                        style={{
                                            cursor: "pointer",
                                            border: "1px solid #edeff5",
                                            padding: "10px 15px",
                                            backgroundColor: "transparent",
                                            borderRadius: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "18px",
                                                width: "18px",
                                                position: "relative",
                                            }}
                                            alt=""
                                            src="/employers-logo.svg"
                                        />
                                        <div
                                            style={{
                                                position: "relative",
                                                fontSize: "14px",
                                                lineHeight: "22px",
                                                fontFamily: "Inter",
                                                color: "#0066ff",
                                                textAlign: "left",
                                                display: "inline-block",
                                                minWidth: "66px",
                                            }}
                                        >
                                            Facebook
                                        </div>
                                    </button>
                                    <button
                                        style={{
                                            cursor: "pointer",
                                            border: "1px solid #edeff5",
                                            padding: "10px 15px",
                                            backgroundColor: "transparent",
                                            borderRadius: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "18px",
                                                width: "18px",
                                                position: "relative",
                                                overflow: "hidden",
                                                flexShrink: "0",
                                            }}
                                            alt=""
                                            src="/employers-logo-1.svg"
                                        />
                                        <div
                                            style={{
                                                position: "relative",
                                                fontSize: "14px",
                                                lineHeight: "22px",
                                                fontFamily: "Inter",
                                                color: "#1da1f2",
                                                textAlign: "left",
                                                display: "inline-block",
                                                minWidth: "66px",
                                            }}
                                        >
                                            Facebook
                                        </div>
                                    </button>
                                    <button
                                        style={{
                                            cursor: "pointer",
                                            border: "1px solid #edeff5",
                                            padding: "10px 15px",
                                            backgroundColor: "transparent",
                                            borderRadius: "4px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "18px",
                                                width: "18px",
                                                position: "relative",
                                                overflow: "hidden",
                                                flexShrink: "0",
                                            }}
                                            alt=""
                                            src="/pinterest1-1.svg"
                                        />
                                        <div
                                            style={{
                                                position: "relative",
                                                fontSize: "14px",
                                                lineHeight: "22px",
                                                fontFamily: "Inter",
                                                color: "#ca2127",
                                                textAlign: "left",
                                                display: "inline-block",
                                                minWidth: "60px",
                                            }}
                                        >
                                            Pinterest
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='col-5'>
                        <div
                            style={{
                                width: "538px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "24px",
                                minWidth: "538px",
                                maxWidth: "100%",
                                fontSize: "12px",
                                color: "#767f8c",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    borderRadius: "12px",
                                    backgroundColor: "#fff",
                                    border: "2px solid #e7f0fa",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    padding: "29px 30px",
                                    gap: "24px",
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "20px",
                                    }}
                                >
                                    <Info
                                        calendarBlank="/calendarblank.svg"
                                        foundedIn="Founded in:"
                                        june2021="14 June, 2021"
                                    />
                                    <Info
                                        calendarBlank="/timer.svg"
                                        foundedIn="Organization type"
                                        june2021="Private Company"
                                    />
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "20px",
                                    }}
                                >
                                    <Info
                                        calendarBlank="/wallet.svg"
                                        foundedIn="Team size"
                                        june2021="120-300 Candidates"
                                    />
                                    <Info
                                        calendarBlank="/briefcase.svg"
                                        foundedIn="Industry types"
                                        june2021="Technology"
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    borderRadius: "12px",
                                    backgroundColor: "#fff",
                                    border: "2px solid rgba(206, 224, 245, 0.7)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    padding: "29px 30px",
                                    gap: "23.6px",
                                    maxWidth: "100%",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0",
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "20px",
                                        lineHeight: "32px",
                                        fontWeight: "500",
                                        fontFamily: "inherit",
                                        color: "#18191c",
                                    }}
                                >
                                    Contact Information
                                </h3>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "16px",
                                        maxWidth: "100%",
                                    }}
                                >
                                    <img
                                        style={{
                                            height: "32px",
                                            width: "32px",
                                            position: "relative",
                                        }}
                                        loading="lazy"
                                        alt=""
                                        src="/globesimple.svg"
                                    />
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            gap: "4px",
                                            minWidth: "277px",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                position: "relative",
                                                lineHeight: "18px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Website
                                        </div>
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                position: "relative",
                                                fontSize: "16px",
                                                lineHeight: "24px",
                                                fontWeight: "500",
                                                color: "#18191c",
                                            }}
                                        >
                                            www.estherhoward.com
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        height: "1px",
                                        position: "relative",
                                        borderTop: "1px solid #e4e5e8",
                                        boxSizing: "border-box",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "254px",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "16px",
                                    }}
                                >
                                    <img
                                        style={{
                                            height: "32px",
                                            width: "32px",
                                            position: "relative",
                                            overflow: "hidden",
                                            flexShrink: "0",
                                        }}
                                        loading="lazy"
                                        alt=""
                                        src="/phonecallduotone-1.svg"
                                    />
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            gap: "4px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                position: "relative",
                                                lineHeight: "18px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Phone
                                        </div>
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                position: "relative",
                                                fontSize: "16px",
                                                lineHeight: "24px",
                                                fontWeight: "500",
                                                color: "#18191c",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            +1-202-555-0141
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        height: "1px",
                                        position: "relative",
                                        borderTop: "1px solid #e4e5e8",
                                        boxSizing: "border-box",
                                    }}
                                />
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "16px",
                                        maxWidth: "100%",
                                    }}
                                >
                                    <img
                                        style={{
                                            height: "32px",
                                            width: "32px",
                                            position: "relative",
                                        }}
                                        loading="lazy"
                                        alt=""
                                        src="/envelope.svg"
                                    />
                                    <div
                                        style={{
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            gap: "4px",
                                            minWidth: "277px",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                position: "relative",
                                                lineHeight: "18px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Email address
                                        </div>
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                position: "relative",
                                                fontSize: "16px",
                                                lineHeight: "24px",
                                                fontWeight: "500",
                                                color: "#18191c",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            esther.howard@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    borderRadius: "12px",
                                    backgroundColor: "#fff",
                                    border: "2px solid rgba(206, 224, 245, 0.7)",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    padding: "29px 20px 29px 32px",
                                    gap: "16px",
                                    maxWidth: "100%",
                                    fontSize: "18px",
                                    color: "#18191c",
                                }}
                            >
                                <div
                                    style={{
                                        width: "474px",
                                        position: "relative",
                                        lineHeight: "28px",
                                        fontWeight: "500",
                                        display: "inline-block",
                                        maxWidth: "100%",
                                    }}
                                >
                                    Follow us on:
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "12px",
                                    }}
                                >
                                    <div
                                        style={{
                                            borderRadius: "4px",
                                            backgroundColor: "#e7f0fa",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "16px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "16px",
                                                width: "16px",
                                                position: "relative",
                                            }}
                                            alt=""
                                            src="/employers-logo-2.svg"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            borderRadius: "4px",
                                            backgroundColor: "#0a65cc",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "16px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "16px",
                                                width: "16px",
                                                position: "relative",
                                                overflow: "hidden",
                                                flexShrink: "0",
                                            }}
                                            alt=""
                                            src="/employers-logo-3.svg"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            borderRadius: "4px",
                                            backgroundColor: "#e7f0fa",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "16px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "16px",
                                                width: "16px",
                                                position: "relative",
                                                overflow: "hidden",
                                                flexShrink: "0",
                                            }}
                                            alt=""
                                            src="/employers-logo-4.svg"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            borderRadius: "4px",
                                            backgroundColor: "#e7f0fa",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "16px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "16px",
                                                width: "16px",
                                                position: "relative",
                                            }}
                                            alt=""
                                            src="/employers-logo-5.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-4 mb-3'>
                        <SingleCompanyJob
                            employersLogo="/employers-logo-7.svg"
                            dribbble="Instagram"
                            california="Australia"
                            suniorUXDesigner="Front End Developer"
                            fullTime="Contract Base"
                            k80kmonth="$50K-$80K"
                            showBadge={false}
                        />
                    </div>

                    <div className='col-4 mb-3'>
                        <SingleCompanyJob
                            employersLogo="/employers-logo-7.svg"
                            dribbble="Instagram"
                            california="Australia"
                            suniorUXDesigner="Front End Developer"
                            fullTime="Contract Base"
                            k80kmonth="$50K-$80K"
                            showBadge={false}
                        />
                    </div>

                    <div className='col-4 mb-3'>
                        <SingleCompanyJob
                            employersLogo="/employers-logo-7.svg"
                            dribbble="Instagram"
                            california="Australia"
                            suniorUXDesigner="Front End Developer"
                            fullTime="Contract Base"
                            k80kmonth="$50K-$80K"
                            showBadge={false}
                        />
                    </div>

                    <div className='col-4 mb-3'>
                        <SingleCompanyJob
                            employersLogo="/employers-logo-7.svg"
                            dribbble="Instagram"
                            california="Australia"
                            suniorUXDesigner="Front End Developer"
                            fullTime="Contract Base"
                            k80kmonth="$50K-$80K"
                            showBadge={false}
                        />
                    </div>

                    <div className='col-4 mb-3'>
                        <SingleCompanyJob
                            employersLogo="/employers-logo-7.svg"
                            dribbble="Instagram"
                            california="Australia"
                            suniorUXDesigner="Front End Developer"
                            fullTime="Contract Base"
                            k80kmonth="$50K-$80K"
                            showBadge={false}
                        />
                    </div>

                </div>
            </div>
        </MainLayout>

    );
}

export default SingleCompany;
