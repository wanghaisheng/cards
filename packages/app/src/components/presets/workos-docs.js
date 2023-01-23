import Inline from '../inline.macro'
import { Image, Box, Flex, Text, Paragraph, Link } from './scope'

const query = {
  title: 'Single Sign-On',
  description: 'Facilitate greater security, easier account management, and accelerated application onboarding and adoption.',
  category: 'Docs',
  version: '2'
}

const code = (
  <Inline>
    {query.version === "2" && (
      <Box
        sx={{
          color: "white",
          backgroundColor: "#1B1B1F",
          backgroundImage: "linear-gradient(to right, #1B1B22, #1B1B1F)",
          fontFamily: "Untitled Sans, Inter, sans-serif",
        }}
      >
        <Link
          href="https://cdn.workos.com/www/open-graph/main.css"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&display=block"
          rel="stylesheet"
        />

        <Box
          sx={{
            position: "absolute",
            width: "1026px",
            height: "1026px",
            left: "-562px",
            top: "0",
            background:
              "linear-gradient(138.82deg, #262550 16.23%, rgba(38, 37, 80, 0) 84.53%)",
            filter: "blur(52px)",
            zIndex: "0",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "831px",
            height: "831px",
            left: "-601px",
            top: "254px",
            background:
              "linear-gradient(134.04deg, #50285C 15.71%, rgba(72, 40, 92, 0) 86.01%)",
            filter: "blur(52px)",
            zIndex: "0",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: 0.5,
            mixBlendMode: "luminosity",
            transform: "rotate(180deg)",
            backgroundImage:
              "url(https://workos.imgix.net/images/5b1d3b4d-7644-49e8-9431-6e1413eb6182.png)",
          }}
        />

        <Flex sx={{ position: "relative", flexDirection: "column" }}>
          <Box sx={{ padding: 56, height: 362, flexGrow: 0, flexShrink: 0 }}>
            <Box
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {query.title && (
                <Text
                  sx={{
                    display: "block",
                    marginBottom: 12,
                    fontSize: 56,
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.25,
                  }}
                >
                  {query.title}
                </Text>
              )}

              {query.description && (
                <Text
                  sx={{
                    display: "block",
                    fontSize: 40,
                    lineHeight: 56 / 40,
                    letterSpacing: "-0.01em",
                    color: "rgba(239, 243, 255, 0.635)",
                  }}
                >
                  {query.description}
                </Text>
              )}

              {query.code && (
                <Text
                  sx={{
                    display: "block",
                    fontSize: 34,
                    fontFamily: "IBM Plex Mono, Menlo, monospace",
                    lineHeight: 56 / 34,
                    letterSpacing: "-0.01em",
                    color: "rgba(239, 243, 255, 0.635)",
                  }}
                >
                  {query.code}
                </Text>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              flexShrink: 0,
              height: 1.19,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
          />

          <Flex
            sx={{
              alignItems: "center",
              flexGrow: 0,
              flexShrink: 0,
              height: 111,
              paddingLeft: 48,
              paddingRight: 48,
            }}
          >
            <svg
              height="36"
              viewBox="0 0 179 34"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M51.7858 5.1189H56.7186L60.2702 19.74C60.9287 22.4996 61.0594 24.143 61.0594 24.143H61.126C61.126 24.143 61.3554 22.5341 62.0139 19.74L65.4003 5.1189H70.9915L74.5752 19.74C75.2658 22.5981 75.431 24.143 75.431 24.143H75.5297C75.5297 24.143 75.5963 22.5981 76.2523 19.74L79.6732 5.1189H84.606L78.3586 29.1029H72.866L69.085 14.5805C68.2958 11.4266 68.2292 10.0148 68.2292 10.0148H68.1626C68.1626 10.0148 68.096 11.4266 67.3734 14.5805L63.8218 29.1029H58.1664L51.7858 5.1189Z" />
              <path d="M83.7825 20.3897C83.7825 14.9025 87.3341 11.3545 92.696 11.3545C98.0234 11.3545 101.575 14.9025 101.575 20.3897C101.575 25.909 98.0234 29.4916 92.696 29.4916C87.3366 29.4891 83.7825 25.909 83.7825 20.3897ZM96.9703 20.3897C96.9703 16.8417 95.2611 14.836 92.696 14.836C89.9337 14.836 88.3873 17.0708 88.3873 20.3897C88.3873 24.0044 90.0965 26.0075 92.696 26.0075C95.4584 26.0075 96.9703 23.7727 96.9703 20.3897Z" />
              <path d="M103.778 11.6235H108.151V14.8438H108.249C109.006 13.1684 110.814 11.4929 113.905 11.4929C114.43 11.4929 114.761 11.5594 114.99 11.6235V15.992H114.859C114.859 15.992 114.465 15.8615 113.379 15.8615C109.993 15.8615 108.151 17.8646 108.151 21.6098V29.1002H103.778V11.6235Z" />
              <path d="M117.03 5.1189H121.403V12.8064C121.403 17.3401 121.336 18.1606 121.336 18.1606H121.403L127.914 11.6237H133.372L125.746 19.1806L134.593 29.1029H129.428L123.048 21.8737L121.403 23.4827V29.1005H117.03V5.1189Z" />
              <path d="M134.656 17.1983C134.656 9.80654 139.261 4.87866 146.167 4.87866C153.073 4.87866 157.678 9.80654 157.678 17.1983C157.678 24.5902 153.073 29.5181 146.167 29.5181C139.261 29.5181 134.656 24.5902 134.656 17.1983ZM152.908 17.1983C152.908 12.1719 150.212 8.78647 146.165 8.78647C142.117 8.78647 139.424 12.1719 139.424 17.1983C139.424 22.2248 142.12 25.6102 146.165 25.6102C150.209 25.6102 152.908 22.2248 152.908 17.1983Z" />
              <path d="M159.352 21.1196H164.351C164.351 23.9457 166.292 25.5227 169.252 25.5227C171.751 25.5227 173.462 24.2734 173.462 22.4994C173.462 20.4962 172.148 19.9689 167.97 19.1484C164.154 18.392 160.109 17.1108 160.109 12.1163C160.109 7.94487 163.661 4.79102 169.087 4.79102C174.742 4.79102 178.23 7.74776 178.23 12.2149H173.23C173.23 10.0466 171.553 8.69884 169.087 8.69884C166.588 8.69884 165.042 9.91357 165.042 11.6876C165.042 13.5602 166.127 14.2821 169.481 14.9721C174.446 16.0242 178.526 16.581 178.526 22.1002C178.526 26.4737 174.71 29.4305 169.087 29.4305C163.365 29.4305 159.352 26.1115 159.352 21.1196Z" />
              <path
                d="M0 17C0 17.7454 0.196348 18.4908 0.575955 19.1316L7.46124 31.0447C8.16809 32.2608 9.24146 33.2547 10.5766 33.6993C13.2077 34.5755 15.9304 33.4508 17.2263 31.2016L18.8887 28.3247L12.3307 17L20.9176 2.13154C21.4151 1.26846 22.0826 0.562309 22.868 0H12.1867C10.3148 0 8.58697 0.993848 7.65759 2.61539L0.575955 14.8685C0.196348 15.5093 0 16.2546 0 17Z"
                fill="#6363F1"
              />
              <path
                d="M39.2696 17C39.2696 16.2546 39.0732 15.5092 38.6936 14.8684L31.7167 2.79845C30.4208 0.562296 27.6981 -0.562321 25.0671 0.300757C23.7319 0.745373 22.6585 1.73922 21.9517 2.95538L20.3809 5.66231L26.9389 17L18.3519 31.8685C17.8545 32.7185 17.1869 33.4377 16.4015 34H27.0829C28.9548 34 30.6826 33.0062 31.612 31.3846L38.6936 19.1315C39.0732 18.4907 39.2696 17.7454 39.2696 17Z"
                fill="#6363F1"
              />
            </svg>
            <Text
              sx={{
                fontSize: 35,
                marginLeft: 12,
                letterSpacing: "-0.02em",
                transform: "translateY(-0.5px)",
              }}
            >
              {query.category}
            </Text>
          </Flex>
        </Flex>
      </Box>
    )}

    {query.version !== "2" && (
      <Flex
        sx={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1B1B1F",
        }}
      >
        <Link
          href="https://cdn.workos.com/www/open-graph/main.css"
          rel="stylesheet"
        />
        <Box
          sx={{
            position: "absolute",
            width: "1026px",
            height: "1026px",
            left: "-562px",
            top: "0",
            background:
              "linear-gradient(138.82deg, #262550 16.23%, rgba(38, 37, 80, 0) 84.53%)",
            filter: "blur(52px)",
            zIndex: "0",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "831px",
            height: "831px",
            left: "-601px",
            top: "254px",
            background:
              "linear-gradient(134.04deg, #50285C 15.71%, rgba(72, 40, 92, 0) 86.01%)",
            filter: "blur(52px)",
            zIndex: "0",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 40,
            left: 45,
          }}
        >
          <svg
            width="218"
            height="28"
            viewBox="0 0 267 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.7858 5.11882H56.7186L60.2702 19.7399C60.9287 22.4995 61.0594 24.1429 61.0594 24.1429H61.126C61.126 24.1429 61.3554 22.534 62.0139 19.7399L65.4003 5.11882H70.9915L74.5752 19.7399C75.2658 22.598 75.431 24.1429 75.431 24.1429H75.5297C75.5297 24.1429 75.5963 22.598 76.2523 19.7399L79.6732 5.11882H84.606L78.3586 29.1028H72.866L69.085 14.5804C68.2958 11.4265 68.2292 10.0147 68.2292 10.0147H68.1626C68.1626 10.0147 68.096 11.4265 67.3734 14.5804L63.8218 29.1028H58.1664L51.7858 5.11882Z"
              fill="#E3E5E8"
            />
            <path
              d="M83.7825 20.3896C83.7825 14.9024 87.3341 11.3544 92.696 11.3544C98.0234 11.3544 101.575 14.9024 101.575 20.3896C101.575 25.9089 98.0234 29.4915 92.696 29.4915C87.3366 29.489 83.7825 25.9089 83.7825 20.3896ZM96.9703 20.3896C96.9703 16.8416 95.2611 14.8359 92.696 14.8359C89.9337 14.8359 88.3873 17.0707 88.3873 20.3896C88.3873 24.0043 90.0965 26.0074 92.696 26.0074C95.4584 26.0074 96.9703 23.7726 96.9703 20.3896Z"
              fill="#E3E5E8"
            />
            <path
              d="M103.778 11.6234H108.151V14.8437H108.249C109.006 13.1683 110.814 11.4928 113.905 11.4928C114.43 11.4928 114.761 11.5593 114.99 11.6234V15.9919H114.859C114.859 15.9919 114.465 15.8614 113.379 15.8614C109.993 15.8614 108.151 17.8645 108.151 21.6097V29.1001H103.778V11.6234Z"
              fill="#E3E5E8"
            />
            <path
              d="M117.03 5.11882H121.403V12.8063C121.403 17.34 121.336 18.1605 121.336 18.1605H121.403L127.914 11.6236H133.372L125.746 19.1805L134.593 29.1028H129.428L123.048 21.8736L121.403 23.4826V29.1004H117.03V5.11882Z"
              fill="#E3E5E8"
            />
            <path
              d="M134.656 17.1984C134.656 9.8066 139.261 4.87872 146.167 4.87872C153.073 4.87872 157.678 9.8066 157.678 17.1984C157.678 24.5903 153.073 29.5182 146.167 29.5182C139.261 29.5182 134.656 24.5903 134.656 17.1984ZM152.908 17.1984C152.908 12.172 150.212 8.78653 146.165 8.78653C142.117 8.78653 139.424 12.172 139.424 17.1984C139.424 22.2249 142.12 25.6103 146.165 25.6103C150.209 25.6103 152.908 22.2249 152.908 17.1984Z"
              fill="#E3E5E8"
            />
            <path
              d="M159.352 21.1195H164.351C164.351 23.9456 166.292 25.5226 169.252 25.5226C171.751 25.5226 173.462 24.2733 173.462 22.4993C173.462 20.4961 172.148 19.9688 167.97 19.1483C164.154 18.3919 160.109 17.1107 160.109 12.1162C160.109 7.94478 163.661 4.79093 169.087 4.79093C174.742 4.79093 178.23 7.74767 178.23 12.2148H173.23C173.23 10.0465 171.553 8.69875 169.087 8.69875C166.588 8.69875 165.042 9.91348 165.042 11.6875C165.042 13.5601 166.127 14.282 169.481 14.972C174.446 16.0241 178.526 16.5809 178.526 22.1001C178.526 26.4736 174.71 29.4304 169.087 29.4304C163.365 29.4304 159.352 26.1114 159.352 21.1195Z"
              fill="#E3E5E8"
            />
            <path
              d="M0 17C0 17.7454 0.196348 18.4908 0.575955 19.1316L7.46124 31.0447C8.16809 32.2608 9.24146 33.2547 10.5766 33.6993C13.2077 34.5755 15.9304 33.4508 17.2263 31.2016L18.8887 28.3247L12.3307 17L20.9176 2.13154C21.4151 1.26846 22.0826 0.562309 22.868 0H12.1867C10.3148 0 8.58697 0.993848 7.65759 2.61539L0.575955 14.8685C0.196348 15.5093 0 16.2546 0 17Z"
              fill="#6363F1"
            />
            <path
              d="M39.2696 17C39.2696 16.2546 39.0732 15.5092 38.6936 14.8684L31.7167 2.7984C30.4208 0.562247 27.6981 -0.56237 25.0671 0.300708C23.7319 0.745324 22.6585 1.73917 21.9517 2.95533L20.3809 5.66226L26.9389 17L18.3519 31.8685C17.8545 32.7185 17.1869 33.4377 16.4015 34H27.0829C28.9548 34 30.6826 33.0062 31.612 31.3846L38.6936 19.1315C39.0732 18.4907 39.2696 17.7454 39.2696 17Z"
              fill="#6363F1"
            />
            <path
              d="M201.568 4.37143H192.815V29.1429H201.568C208.73 29.1429 213.608 24.2163 213.608 16.7571C213.608 9.33265 208.73 4.37143 201.568 4.37143ZM201.568 6.86939C207.311 6.86939 210.529 10.7898 210.529 16.7571C210.529 22.7592 207.311 26.6449 201.568 26.6449H195.755V6.86939H201.568Z"
              fill="#E3E5E8"
            />
            <path
              d="M232.642 20.4347C232.642 14.8143 229.182 11.2755 224.373 11.2755C219.564 11.2755 216.104 14.8143 216.104 20.4347C216.104 26.0551 219.564 29.5592 224.373 29.5592C229.182 29.5592 232.642 26.0551 232.642 20.4347ZM218.941 20.4347C218.941 16.2367 220.982 13.6 224.373 13.6C227.763 13.6 229.805 16.2367 229.805 20.4347C229.805 24.6327 227.763 27.2347 224.373 27.2347C220.982 27.2347 218.941 24.6327 218.941 20.4347Z"
              fill="#E3E5E8"
            />
            <path
              d="M235.237 20.4347C235.237 26.0204 238.593 29.5592 243.437 29.5592C247.312 29.5592 249.872 27.3735 250.425 23.6265H247.692C247.208 25.951 245.789 27.2347 243.437 27.2347C240.011 27.2347 238.074 24.5286 238.074 20.4347C238.074 16.3408 240.011 13.6 243.437 13.6C245.789 13.6 247.208 14.8837 247.692 17.2082H250.425C249.872 13.4959 247.312 11.2755 243.437 11.2755C238.593 11.2755 235.237 14.849 235.237 20.4347Z"
              fill="#E3E5E8"
            />
            <path
              d="M252.642 23.9735C252.953 27.7204 256.067 29.5592 260.219 29.5592C264.128 29.5592 267 27.3041 267 24.251C267 21.4408 265.339 20.0531 262.502 19.498L259.042 18.8388C257.036 18.4571 255.998 17.8327 255.998 16.3408C255.998 14.6408 257.486 13.4959 259.804 13.4959C262.191 13.4959 263.748 14.5367 263.955 16.3061H266.619C266.273 13.0102 263.817 11.2755 259.804 11.2755C255.963 11.2755 253.334 13.5653 253.334 16.5143C253.334 19.5673 255.375 20.7122 258.178 21.2327L261.257 21.8571C263.471 22.2735 264.301 23.1061 264.301 24.3898C264.301 26.2633 262.571 27.3735 260.184 27.3735C257.832 27.3735 255.617 26.3673 255.41 23.9735H252.642Z"
              fill="#E3E5E8"
            />
          </svg>
        </Box>
        <Flex
          sx={{
            paddingLeft: 40,
            paddingRight: 40,
            marginTop: 32,
            flexDirection: "column",
            position: "relative",
            width: "100%",
          }}
        >
          <Flex>
            <Box sx={{ flex: "auto", mr: 4 }}>
              {query.category !== "" && (
                <Box>
                  <Text
                    sx={{
                      borderRadius: 32,
                      backgroundColor: "rgba(95, 92, 254, 0.25)",
                      color: "#938FFF",
                      display: "inline",
                      fontSize: 24,
                      fontWeight: 500,
                      fontFamily: "Untitled Sans",
                      lineHeight: "20px",
                      padding: "12px 20px",
                    }}
                  >
                    {query.category}
                  </Text>
                </Box>
              )}
              <Paragraph
                sx={{
                  width: "100%",
                  fontSize: 42,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-.04em",
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  fontFamily: "Untitled Sans",
                  color: "#e3e5e8",
                  marginTop: 32,
                }}
              >
                {query.title}
              </Paragraph>
            </Box>
            <Box sx={{ flexShrink: "0", mr: -3, mt: -2 }}>
              {query.category === "Single Sign-On" && (
                <Image
                  src="https://workos.imgix.net/docs/icons/sso.png"
                  width="160px"
                  height="160px"
                />
              )}
              {query.category === "Directory Sync" && (
                <Image
                  src="https://workos.imgix.net/docs/icons/directory-sync.png"
                  width="160px"
                  height="160px"
                />
              )}
              {query.category === "Admin Portal" && (
                <Image
                  src="https://workos.imgix.net/docs/icons/admin-portal.png"
                  width="160px"
                  height="160px"
                />
              )}
              {query.category === "Multi-Factor Authentication" && (
                <Image
                  src="https://workos.imgix.net/docs/icons/mfa.png"
                  width="160px"
                  height="160px"
                />
              )}
              {query.category === "Audit Logs" && (
                <Image
                  src="https://workos.imgix.net/docs/icons/audit-logs.png"
                  width="160px"
                  height="160px"
                />
              )}
              {query.category === "Magic Link" && (
                <Image
                  src="https://workos.imgix.net/docs/icons/magic-link.png"
                  width="160px"
                  height="160px"
                />
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    )}
  </Inline>
)

export const workosDocs = { name: 'WorkOS Docs', code, query }
