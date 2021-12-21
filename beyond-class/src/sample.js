<Container className='bg-dark'>
                {/* Create post */}
                <div className="posting-div grey" >
                    <div className="create-post-div black">
                        <img src={photoImg} alt='some-test'/>
                        <i className="far fa-user-circle"></i>
                        <input type="text" className="create-post black" placeholder="Create Post"/>
                    </div>
                    <div className="attach-file-div black">
                        <Link className="attaching-link-1" href=""><img src={photoImg} alt="Photos-img"/> Photos</Link>
                        <Link className="attaching-link-2" href=""><img src={videoImg} alt="Videos-img"/> Videos</Link>
                        <Link className="attaching-link-3" href=""><img src={videoImg} alt="Videos-img"/> Text</Link>
                    </div>
                </div>

                {/* <!-- Others-Posts Div -- */}
                <div class="others-posts-div">
                    <div class="post-owner">
                        <img src={popularPostImg} alt="popular-post-img"/>
                        <h4 className="profile_name">Lakshaya Sharma  2 hours ago</h4>
                    </div>
                    <div className="post-content grey"></div>
                    <div className="post-engagement"></div>
                </div>

                <div class="community-div grey">
                    <div class="community-count c-c-head black">
                        <h4>Recommended Communities</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 1</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 2</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 3</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 4</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 5</h4>
                    </div>
                    <div class="community-count black">
                        <h4>Community 6</h4>
                    </div>
                </div>
            </Container>