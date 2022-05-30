import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import { request } from "../lib/datocms";
import Breadcrumb from "../components/Common/Breadcrumb"
import OtherWebinars from "../components/Webinars/OtherWebinarsSection"
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

export default function WebinarPost(props) {

    const { postData } = props;
    console.log(postData)
    return (
        <>
            <Header />
            <main>
                {/* breadcrumb-start */}
                <Breadcrumb pageTitle={postData.titulo} />
                {/* breadcrumb-end */}

                <section className="project-details-area pt-120 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="project-big-thumb">
                                    <iframe
                                        width="1170"
                                        height="534"
                                        src={"https://www.youtube.com/embed/" + postData.preview.providerUid}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={postData.titulo}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                                <div className="p-details-content mb-40">
                                    <h3>{postData.titulo}</h3>
                                    <p>{postData.descripcion}</p>
                                   
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="sidebar-wrap mb-40">
                                    <div className="sidebar-right">
                                        <div className="sidebar-single">
                                            <label>Presentador:</label>
                                            <span>{postData.presentador.nombre}</span>
                                        </div>
                                        <div className="sidebar-single">
                                            <label>Category:</label>
                                            <span>{postData.categoria.titulo}</span>
                                        </div>
                                        <div className="sidebar-single">
                                            <label>Value:</label>
                                            <span>{postData.costo} $</span>
                                        </div>
                                        <div className="sidebar-single">
                                            <label>Date:</label>
                                            <span>{postData.fecha}</span>
                                        </div>
                                        <div className="ktrust-btn">
                                        <Link href="/service"><a className="theme-btn">Add to Cart </a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* fact-start */}
                <OtherWebinars />
                {/* fact-end */}
            </main>
            <Footer />
        </>
    );
}

/*Query para los generar las paginas */
const PATHS_QUERY = `
query MyQuery {
  allWebinars {
    slug
  }
}
`;
export const getStaticPaths = async (context) => {
    const slugQuery = await request({
        query: PATHS_QUERY,
        preview: context.preview,
    });

    let paths = [];
    slugQuery.allWebinars.map((p) => paths.push(`/${p.slug}`));

    return {
        paths,
        fallback: "blocking",
    };
};

/*Query para obtener la informacion */
const WEBINAR_QUERY = `
query MyQuery ($slug: String){
    webinar(filter: {slug: {eq: $slug}}) {
      banner {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
      costo
      fecha
      id
      titulo
      descripcion
      categoria {
        titulo
      }
      presentador {
        nombre
      }
      preview {
        url
      providerUid
      provider
      thumbnailUrl
      title
      }
    }
  }
`;
export const getStaticProps = async ({ params }) => {
    const post = await request({
        query: WEBINAR_QUERY,
        variables: { slug: params.slug },
    });
    return {
        props: {
            postData: post.webinar,
        },
    };
};